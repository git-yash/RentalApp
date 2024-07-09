import {generateClient} from 'aws-amplify/api';

export abstract class AbstractAPIService {
  client = generateClient();

  logError(e: Error, customErrorMessage?: string, refClass?: string) {
    console.error(refClass, customErrorMessage, e);
    return new Error(customErrorMessage) || e;
  }
}
