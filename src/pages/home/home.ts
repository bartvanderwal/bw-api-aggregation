import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx'

import { NavController } from 'ionic-angular'
import { HttpHeaders } from '@angular/common/http'

import { TriathlonEvent, EventPhoto, EventPhotoData } from '../../models'
import { EventsViewModel } from '../../models'

// import { TriathlonEventsProvider } from '../../providers/triathlon-events/triathlon-events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  readonly triathlonApiKey: string = 'a7c0ebbc38147e762f7d75ff2fac4e00'
  readonly baseUrl = 'https://api.triathlon.org/v1/'
  headers: HttpHeaders

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.headers = new HttpHeaders().set('apikey', this.triathlonApiKey)
  }
  examples: Array<number> = []
  events: Array<TriathlonEvent> = []
  nrOfEvents: number
  photos: Array<EventPhoto> = []
  total: number
  isLoaded = false
  
  getEvents() {
    return new Promise<EventsViewModel>((resolve, reject) => {
      let viewModel = new EventsViewModel()
      viewModel.events = []
      viewModel.photos = []

      let eventEndpoint = `events?start_date=2017-01-01&end_date=2018-01-01&per_page=100`
      
      let url = this.baseUrl + eventEndpoint
      
      try {
        // Observable.from([1,2,3,4,5]).map(val => val + 10).subscribe(data => {
        //   this.examples.push(data);
        // });
        
        // Get the data of the events through the events API url.
        this.http.get(url, { headers: this.headers }).subscribe((eventData) => {
          viewModel.events = (eventData as any).data
          viewModel.nrOfEvents = (eventData as any).total
          let currentEventIndex = 0
          Observable.from(viewModel.events).subscribe((event: TriathlonEvent) => {
            event.event_index = currentEventIndex
            // Determine the correct url for the event photo's.
            let eventPhotoEndpoint = `events/${event.event_id}/images`
            let url = this.baseUrl + eventPhotoEndpoint
            // Get the event photo's - if any - of each event through the event photos API url.
            this.http.get(url, { headers: this.headers }).subscribe((result: EventPhotoData) => {
              if (result.total) {
                let mainImage = result.data[0]
                currentEventIndex++
                // this.events[currentEventIndex].mainImage = mainImage
                this.photos.push(mainImage) 
              }
            })
          }
          //).then(() => {
          //  this.isLoaded = true;
          //  resolve(viewModel)            
          //})
        , error => {
          let message = `Error on pasing json data from ${url} to events: ${error}.'`
          console.log(message)
          reject(error)
          })
        })
      } catch (err) {
        console.log(err)
      }
    })
  }
  
  ionViewDidLoad() {
    // Haal de events op
    this.getEvents()
    // En filter alleen de 1e 10 events en events met fotos eruit
    .then((result) => {
      this.events = result.events.filter(e => e.mainImage || e.index<=10)
    }).catch(err => {
      console.log(err)
    })
  }

}


