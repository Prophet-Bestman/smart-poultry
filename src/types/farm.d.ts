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
  Intruder: string;
  Temperature: number;
  lightStatus: string;
}

interface FarmWorker {
  Worker1: number;
  Worker3: number;
}
