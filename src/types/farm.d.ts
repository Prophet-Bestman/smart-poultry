interface FarmStaffActiviyType {
  fullName: string;
  id: string;
  activity: "Clocked In" | "Clocked Out";
  date: number;
  userId: string;
}

interface FarmInfoType {
  FarmData: FarmData;
  FarmWorker: FarmWorker;
}

interface FarmData {
  FanStatus: string;
  Humidity: number;
  HeatStatus: string;
  Intruder: string;
  Temperature: number;
  lightStatus: string;
  IP_Address: string;
}

interface FarmWorker {
  Worker1: number;
  Worker3: number;
}
