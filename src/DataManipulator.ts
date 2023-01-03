import { ServerRespond } from './DataStreamer';

export interface Row {
  stock: string,
  top_ask_price: number,
  timestamp: Date
  upper_bound:number,
  lower_bound:number,
  trigger_alert:number| undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]):row {
   const priceABC - (serverRespond [0]. top_ask.price + serverRespond[0].top bid.price) / 2;
const priceDEF = (serverRespond [1] .top ask.price + serverRespond[1].top bid.price) / 2;
const ratio = priceABC / priceDEF;
const upperBound = 1 + 0.05;
const lowerBound = 1 - 0.05;
return {
price _abc: priceABC, price def: priceDEF, ratio,
timestamp: serverRespond[©] .timestamp > serverRespond [1]. timestamp ? serverRespond[®].timestamp: serverRespond [1]. timestamp, upper_bound: upperBound,
Lower bound: lowerBound,
trigger_alert: (ratio > upperBound || ratio < lowerBound) ? ratio: undefined,
      };
    })
  }
}
