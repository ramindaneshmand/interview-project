import {Injectable, Injector, Type} from '@angular/core';
import {EntityCollectionServiceBase} from '@ngrx/data';
import {debounceTime, map, Observable} from 'rxjs';
import {Update} from '@ngrx/entity';

@Injectable()
export class ConnectorService {
  baseUrl: string = 'http://localhost:4200';
  stateEntity: Type<EntityCollectionServiceBase<any>> | undefined;
  state: EntityCollectionServiceBase<any> | undefined;

  constructor() {
  }

  setSetEntity(stateEntity: Type<EntityCollectionServiceBase<any>>, injector: Injector): void {
    this.state = injector.get(stateEntity);
  }

  connect(): Observable<any> | undefined {
    return this.state?.entities$.pipe(
      debounceTime(1000)
    );
  }

  getAll(): void {
    const subscription = this.state?.getWithQuery({}).subscribe(
      {
        next: (data) => {
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          subscription?.unsubscribe();
        }
      }
    )
  }

  getDetail(id: string): Observable<any> | undefined {
    return this.state?.getWithQuery({id}).pipe(
      debounceTime(500),
      map((data) => data[0])
    )
  }

  add(value: any): Observable<any> | undefined {
    return this.state?.add(value);
  }
}
