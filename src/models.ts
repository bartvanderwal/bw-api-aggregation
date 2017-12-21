export class EventPhoto {
  id: number
  event_id: number // 109656
  image_id: string // 68443
  image_filename: string // "discoveryelitetriworlcupcpt17_beadle-812.jpg"
  image_filesize: string // "1.44MB"
  image_extension: string // "jpg"
  image_width: number // 2400
  image_height: number // 1600
  image_date: string // "2017-02-12T17:06:06Z"
  image_credit: string //"International Triathlon Union / Greg Beadle"
  image_url: string // "https://www.triathlon.org/uploads/webgalleries/109656/discoveryelitetriworlcupcpt17_beadle-812.jpg"
  thumbnail: string // "https://www.triathlon.org/uploads/webgalleries/109656/discoveryelitetriworlcupcpt17_beadle-812__medium.jpg"
}

export class EventsViewModel {
  events: Array<TriathlonEvent>
  photos: Array<EventPhoto>
  nrOfEvents: number
  nrOfPhotos: number
}

export class EventPhotoData {
  total: number
  data: Array<EventPhoto>
}

export class TriathlonEvent {
  id: string
  event_id: number // 121492
  event_title: string // "2016 SGP Triathlon National Championships"
  event_slug: string // "2016_sgp_triathlon_national_championships"
  event_edit_date: Date // "2017-01-14T00:00:00+00:00"
  event_venue: string // "East Coast Park"
  event_country: string // "Singapore"
  event_latitude: number // 1.300784
  event_longitude: number // 103.912187
  event_date: Date // "2017-01-14"
  event_finish_date: Date // "2017-01-14"
  event_country_isoa2: string // "SG"
  event_country_noc: string // "SGP"
  event_region_id: string // 13
  event_country_id: number // 264
  /* Toegevoegd BW voor ViewModel */
  mainImage: EventPhoto
  index: number
  event_index: number
}
