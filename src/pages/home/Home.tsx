import React, { useEffect, useState } from "react";
import blockerservice, { getAuthMetaData } from "../../api";
import EnhacedCard from "../../Component/EnhancedCard/EnhancedCard";
import StatsCard from "../../Component/StatsCard/StatsCard";
import {
  GetStatsResponse,
  GetStatsRequest,
  Stats,
} from "../../generated/grpc/protos/getstats/getstats_pb";
import { ToggleBlockerRequest } from "../../generated/grpc/protos/toggleblocker/toggleblocker_pb";
import { UpdateUpstreamDnsRequest } from "../../generated/grpc/protos/updateupstreamdns/updateupstreamdns_pb";
import StyledHome from "./StyledHome";

function Home() {
  const [upstreamDns, setUpstreamDns] = useState("");
  const [processedQueries, setProcessedQueries] = useState<Stats[]>([]);
  const [blockedQueries, setBlockedQueries] = useState<Stats[]>([]);

  useEffect(() => {
    blockerservice
      .getStats(new GetStatsRequest(), getAuthMetaData())
      .then((res) => {
        setProcessedQueries(res.getStatsList().filter((s) => !s.getBlocked()));
        setBlockedQueries(res.getStatsList().filter((s) => s.getBlocked()));
      });
  }, []);

  const getRecentVisitedText = () => {
    return processedQueries.slice(0, 2).join(" ");
  };

  const getRecentBlockedText = () => {
    return processedQueries.slice(0, 2).join(" ");
  };
  const toggleBlocker = () => {
    blockerservice.toggleBlocker(new ToggleBlockerRequest(), getAuthMetaData());
  };

  const handleInputChange = (e: any) => {
    setUpstreamDns(e.target.value);
  };
  const updateUpstreamDns = () => {
    const req = new UpdateUpstreamDnsRequest();
    req.setNewdnsserver(upstreamDns);
    blockerservice.updateUpstreamDns(req, getAuthMetaData());
  };
  return (
    <StyledHome>
      <h1>Home</h1>
      <div className="top-cards">
        <div>
          <h2>Queries processed</h2>
          <StatsCard
            total={processedQueries.length}
            desc={"Recently visited - " + getRecentVisitedText()}
          />
        </div>
        <div>
          <h2>Queries blocked</h2>
          <StatsCard
            total={blockedQueries.length}
            desc={"Recently blocked - " + getRecentBlockedText()}
          />
        </div>
      </div>

      <EnhacedCard
        onSwitch={toggleBlocker}
        inputValue={upstreamDns}
        handleInputChange={handleInputChange}
        onSumit={updateUpstreamDns}
      />
    </StyledHome>
  );
}

export default Home;
