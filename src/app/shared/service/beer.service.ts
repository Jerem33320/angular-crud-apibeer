import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeers(): Observable<any>{
    return this.http.get<any>('https://api.punkapi.com/v2/beers')
    .pipe(
      tap(data => data),
      catchError(this.handleError('getBeers', []))
    )
  }

  getBeer(id: number): Observable<any>{
    return this.http.get<any>(`https://api.punkapi.com/v2/beers/${id}`)
    .pipe(
      tap(data => data),
      catchError(this.handleError('getBeer', []))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
