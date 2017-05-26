import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ResourceConfig } from '../config/app.config';

import { ContentType } from '../constant/content-type';
import { Error } from '../model/error.model';

@Injectable()
export class HttpClientService {

    constructor(public http: Http, public router: Router) {
    }

    get(serviceUrl: string, routeName: string = '', contentType: ContentType = ContentType.Json) {
        const url = this.getUrl(serviceUrl, routeName);
        const headers = this.getHeaders(contentType, false);
        return this.http.get(url, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(this.transformError(err));
            });
    }

    post(serviceUrl: string, data: any, routeName: string = '', contentType: ContentType = ContentType.Json) {
        let body = data;
        if (typeof data === 'object' || data instanceof Array) {
            body = JSON.stringify(data);
        }
        const url = this.getUrl(serviceUrl, routeName);
        const headers = this.getHeaders(contentType, false);
        return this.http.post(url, body, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(this.transformError(err))
            });
    }

    put(serviceUrl: string, routeName: string = '', data: any, contentType: ContentType = ContentType.Json) {
        let body = data;
        if (typeof data === 'object' || data instanceof Array) {
            body = JSON.stringify(data);
        }
        const url = this.getUrl(serviceUrl, routeName);
        const headers = this.getHeaders(contentType, false);
        return this.http.put(url, body, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(this.transformError(err));
            });
    }

    delete(serviceUrl: string, routeName: string = '', contentType: ContentType = ContentType.Json) {
        const url = this.getUrl(serviceUrl, routeName);
        const headers = this.getHeaders(contentType, false);
        return this.http.delete(url, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(this.transformError(err));
            });
    }

    private getUrl(serviceUrl: string, routeName: string): string {
        const baseServiceUrl = ResourceConfig.baseUrl;

        let url = baseServiceUrl + ResourceConfig.api + serviceUrl;
        if (routeName !== '') {
            url = url + '/' + routeName;
        }
        return url;
    }

    private getHeaders(contentType: ContentType, secured: boolean): Headers {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        // if (secured) {
        // 	let token = this.storageService.get("token");
        // 	headers.append('Authorization', 'Bearer ' + token);
        // }

        switch (contentType) {
            case ContentType.UrlEncoded:
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                break;
            case ContentType.Xml:
                headers.append('Content-Type', 'application/xml');
                break;
            default:
                headers.append('Content-Type', 'application/json');
        }

        return headers;
    }

    private transformError(err: any): Error {
        const error = new Error('', '');

        if (err.status === 401) {
            this.router.navigate(['/unauthorized']);
        } else {
            if (err.text() !== '') {
                const errObj = err.json();
                if (errObj instanceof Array) {
                    errObj.forEach((e: any) => {
                        error.errors.push(new Error(e.error, e.error_description));
                    });
                } else if (typeof errObj === 'object') {
                    error.key = errObj.error;
                    error.description = errObj.error_description;
                }
            }
        }

        return error;
    }
}