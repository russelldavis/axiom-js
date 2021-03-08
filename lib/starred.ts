import { AxiosResponse } from 'axios';

import HTTPClient from './httpClient';
import GlobalListOptions from 'options';

export interface StarredQuery {
    id?: string;
    name: string;
    dataset: string;
    kind: QueryKind;
    // query: any;
    who?: string;
    metadata: { [key: string]: string };
    created?: string;
}

export enum QueryKind {
    Analytics = 'analytics',
    Stream = 'stream',
}

export enum OwnerKind {
    User = 'user',
    Team = 'team',
}

export interface ListOptions extends GlobalListOptions {
    kind: QueryKind;
    dataset: string;
    who: OwnerKind;
}

export default class StarredQueriesService extends HTTPClient {
    private readonly localPath = '/api/v1/starred';

    list = (options: ListOptions): Promise<[StarredQuery]> =>
        this.client
            .get<[StarredQuery]>(this.localPath, { params: options })
            .then((response) => {
                return response.data;
            });

    get = (id: string): Promise<StarredQuery> =>
        this.client.get<StarredQuery>(this.localPath + '/' + id).then((response) => {
            return response.data;
        });

    create = (starredQuery: StarredQuery): Promise<StarredQuery> =>
        this.client.post<StarredQuery>(this.localPath, starredQuery).then((response) => {
            return response.data;
        });

    update = (id: string, starredQuery: StarredQuery): Promise<StarredQuery> =>
        this.client.put<StarredQuery>(this.localPath + '/' + id, starredQuery).then((response) => {
            return response.data;
        });

    delete = (id: string): Promise<AxiosResponse> => this.client.delete<AxiosResponse>(this.localPath + '/' + id);
}