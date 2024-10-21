import {DefaultDataService, HttpUrlGenerator, QueryParams} from '@ngrx/data';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Update} from '@ngrx/entity';
import {Example} from '../../models/example.model';

@Injectable()
export class ExampleDataService extends DefaultDataService<Example> {
  entity = 'data';

  constructor(http: HttpClient,
              httpUrlGenerator: HttpUrlGenerator, private httpClient: HttpClient) {
    httpUrlGenerator.collectionResource('Example', 'http://localhost:4200/api');
    httpUrlGenerator.entityResource('Example', 'http://localhost:4200/api', true);
    super('Example', http, httpUrlGenerator);
  }

  public override getWithQuery(queryParams: QueryParams | string | undefined): Observable<Example[]> {
    return super.getWithQuery(queryParams);
  }

  public override update(update: Update<Example>): Observable<Example> {
    return this.httpClient.post<Example>('http://localhost:4200/api/examples', update.changes);
  }

  public override add(entity: Example): Observable<Example> {
    const payload = Object.assign(new Example(), entity);
    return this.httpClient.post<Example>('http://localhost:4200/api/examples', payload);
  }

  public override delete(key: number | string): Observable<number | string> {
    return super.delete(key);
  }
}
