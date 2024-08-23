import {GithubUser, IssueLabel, RepositoryInfo, RepositoryIssue} from "./types";

const fetchData = async (url: string) => {
    return await (await fetch(url)).json()
}

export default async function (url: string): Promise<RepositoryInfo> {
    return await repoMapper(await fetchData(url))
}

export const repoMapper = async (data: any): Promise<RepositoryInfo> => {
    const issues = await fetchData(data[`url`]+"/issues")

    return {
        name: data['name'],
        description: data['description'],
        forksCount: data['forks_count'],
        homepage: data['homepage'],
        stargazersCount: data['stargazers_count'],
        url: data['html_url'],
        watchersCount: data['watchers_count'],
        issues: {
            exist: data['has_issues'],
            url: data['issues_url'],
            count: issues?.length,
            opened: data['open_issues_count'],
            closed: issues?.length - data['open_issues_count'],
            items: issues?.map(issueMapper),
        }
    }
};

const issueMapper = (data: any): RepositoryIssue => ({
    id: data['number'],
    title: data['title'],
    url: data['html_url'],
    state: data['state'],
    body: data['body'],
    labels: data['labels'].map(labelMapper),
    assignees: data['assignees'].map(userMapper)
});

const labelMapper = (data: any): IssueLabel => ({
    name: data['name'],
    url: data['url'],
    description: data['description']
});

const userMapper = (data: any): GithubUser => ({
    name: data['login'],
    url: data['html_url'],
    avatar: data['avatar_url']
});