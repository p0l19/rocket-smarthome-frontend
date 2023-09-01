import * as IpAddress from 'ip-address';

export interface Plug {
    device_Id: number;
  name: string;
  ipAddress: IpAddress.Address4;
  localKeay: string;
  powerconsumption: number;
  state: boolean;
  schedule: boolean;
  duration: Duration;
}

interface Duration {
    secs: number
    nanos: number
  }