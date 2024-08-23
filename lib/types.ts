export type GithubUser = {
    avatar: string
    url: string
    name: string
}

export type IssueLabel = {
    name: string
    url: string
    description: string
}

export type RepositoryIssue = {
    id: number
    title: string
    body: string
    url: string
    labels: IssueLabel[]
    state: string
    assignees: GithubUser[]
}

export type RepositoryInfo = {
    name: string
    url: string
    description: string
    homepage: string
    stargazersCount: number
    forksCount: number
    watchersCount: number
    issues: {
        opened: number
        closed: number
        count: number
        exist: boolean
        url: string
        items: Array<RepositoryIssue>
    }
}