import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // Observer
    const observer = {
      next: (e: string) => this.log(e),
      error: (error: any) => this.log('FEHLER ' + error),
      complete: () => this.log('COMPLETE')
    }

    // Observable!
    // const observable = of('😃', '😱', '😇');

    const observable = new Observable<string>(subscriber => { // Producer

      // Subscriber
      subscriber.next('😃');
      const x = setTimeout(() => subscriber.next('😍'), 1000);
      const y = setTimeout(() => { subscriber.next('🥳'); this.log('🧟‍♂️🧟🧟‍♂️ Zombie Code') }, 2000);
      const z = setTimeout(() => subscriber.complete(), 3000);
      // setTimeout(() => subscriber.next('ÄTSCHE BÄTSCHE'), 4000);

      return () => {
        this.log('Es wurde unsubscribed! Wir sollten die Zombies killen!');
        clearTimeout(x);
        clearTimeout(y);
        clearTimeout(z);
      }
    });

    // Subscription
    const subscription = observable.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 1500);

    const subscription2 = observable.subscribe(observer);



    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
