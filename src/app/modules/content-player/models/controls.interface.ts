export interface VideoDuration {
  currentTime?: number;
  duration?: number;
  percent?: number;
  totalTime?: number;
}

export interface VolumeControls {
  volume?: number;
  muted?: boolean;
}

export interface Captions {
  display?: boolean;
  captions?: boolean;
}

export interface Controls {
  playing?: boolean;
  volume?: Partial<VolumeControls>;
  duration?: Partial<VideoDuration>;
  captions?: Partial<Captions>;
  speed?: number;
}
