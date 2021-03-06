import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Store} from '@ngrx/store';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class NameListService {

  //CHANGE TDH:
  names: Observable<string[]>;
  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http , private _store: Store<string[]>) {
    //CHANGE TDH
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<Array<string>> {
    return this.http.get('/assets/data.json')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  /**
   * CHANGE TDH
   */
  getnamesNgrx() {
    this.http.get('/assets/data.json')
        .map((res: Response) => res.json())
        .map(payload => ({ type: 'ADD_NAME_LIST', payload: payload }))
        .subscribe(action => this._store.dispatch(action));
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

