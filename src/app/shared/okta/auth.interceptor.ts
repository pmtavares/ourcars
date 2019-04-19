import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private okAuth: OktaAuthService){
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return from(this.handleAccess(request,next));
    }


    private async handleAccess(request: HttpRequest<any>, next:HttpHandler): Promise<HttpEvent<any>>{
        if(request.urlWithParams.indexOf('localhost') > -1){
            const accessToken = await this.okAuth.getAccessToken();
            request = request.clone({
                setHeaders:{
                    Authorization: 'Bearer '+ accessToken
                }
            });
        }
        return next.handle(request).toPromise();
    }
}