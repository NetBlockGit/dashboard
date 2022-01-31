export function setToken(t: string) {
    localStorage.setItem("token", t)
}

export function getToken(): string | null {
    return localStorage.getItem("token")
}
