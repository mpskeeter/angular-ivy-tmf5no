export interface VideoDuration {
  currentTime?: number;
  duration?: number;
  percent?: number;
  totalTime?: number;
  images?: string[];
}

export interface VolumeControls {
  volume?: number;
  muted?: boolean;
}

export interface Captions {
  disabled?: boolean;
  captions?: boolean;
}

export interface Screen {
  theater?: boolean;
  full?: boolean;
  mini?: boolean;
}

export interface Controls {
  playing?: boolean;
  volume?: Partial<VolumeControls>;
  duration?: Partial<VideoDuration>;
  captions?: Partial<Captions>;
  speed?: number;
  screen?: Partial<Screen>;
}
