import {Request, Response} from 'express';

import {EXAMPLE_DATA} from './example-data';

const moduleSummarisedProperties = ['id', 'name', 'label', 'routerParameter', 'iframeURL'];
const fieldSummarisedProperties = ['id', 'name', 'type', 'parentId', 'showAs', 'label'];


export function getData(request: Request, response: Response): void {
  const id: string = request.query?.['id'] as string;
  setTimeout(() => {
    let payload: any;
    if (id) {
      payload = EXAMPLE_DATA.filter(data => data.id === id);
    } else {
      payload = EXAMPLE_DATA;
    }
    response.status(200).json(payload);
  }, 1500);

}

export function saveData(request: Request, response: Response): void {
  setTimeout(() => {
    const changes = request.body;
    if (changes.id) {
      const moduleIndex = EXAMPLE_DATA.findIndex(data => data.id === changes.id);
      EXAMPLE_DATA[moduleIndex] = {...EXAMPLE_DATA[moduleIndex], ...changes};
      response.status(200).json(EXAMPLE_DATA[moduleIndex]);
    } else {
      console.log(changes)
      changes.id = getID();
      EXAMPLE_DATA.push(changes);
      response.status(200).json(changes);
    }
  }, 1500);
}
export function deleteData(request: Request, response: Response): void {
  const id: string = request.query?.['id'] as string;
  setTimeout(() => {
    if (id) {
      const moduleIndex = EXAMPLE_DATA.findIndex(data => data.id === id);
      EXAMPLE_DATA.splice(moduleIndex, 1);
      response.status(200).json({
        successCode: 'EXAMPLE_DATA_UPDATE_SUCCESS',
        successDescription: 'EXAMPLE DATA updated successfully',
        payload: null
      });
    }
  }, 1500);
}
export function getID(): string {
  return 'SR' + Math.floor(Math.random() * 1000000000000000);
}
