import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../core/store/app.reducer';
import * as fromAuth from '../../core/store/auth/auth.reducer';
import { PageAnimations } from './page.animations';
import { FirebaseService } from '../../core/firebase/firebase.service';
import { tap, filter, withLatestFrom, take, takeUntil, map, subscribeOn } from 'rxjs/operators';
import { distinctUntilChanged, interval, Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { User } from '../../core/store/user/user.model';
import { PageSelectors } from './+state/page.selectors';
import { LoadData, Cleanup } from './+state/page.actions';
import { RouterNavigate } from '../../core/store/app.actions';
import { UpdateUser } from '../../core/store/user/user.actions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: PageAnimations,
})
export class PageComponent implements OnInit {

  // --------------- ROUTE PARAMS & CURRENT USER ---------

  // --------------- LOCAL AND GLOBAL STATE --------------

  // --------------- DB ENTITY DATA ----------------------

  /** Container id for selectors and loading. */
  containerId: string = this.db.createId();
  cards: Array<string> = ["Long Term Goals", "Quarter Goals", "Weekly Goals", "Organize", "Schedule"];
  cardId=2;
  longtermcolor='green';
  quartercolor='green';
  weeklycolor='gray';
  organizecolor='gray';
  schedulecolor='gray';
  // currentCard = this.cards[this.cardId];
  switchCards(input:boolean){
    if (input){
      if (this.cardId != 0){
        this.cardId = this.cardId - 1;
        if (this.cardId == 0){
          this.longtermcolor='gray';
        }
        if (this.cardId == 1){
          this.quartercolor='gray';
        }
        if (this.cardId == 2){
          this.weeklycolor='gray';
        }
        if (this.cardId == 3){
          this.organizecolor='gray';
        }
      }
    }
    else{
      if (this.cardId != 4){
        this.cardId = this.cardId + 1;
        if (this.cardId==1){
          this.longtermcolor='green'
        }
        if (this.cardId==2){
          this.quartercolor='green'
        }
        if (this.cardId==3){
          this.weeklycolor='green'
        }
        if (this.cardId==4){
          this.organizecolor='green'
        }
      }
    }
  }


  // --------------- DATA BINDING ------------------------

  // --------------- EVENT BINDING -----------------------

  // --------------- HELPER FUNCTIONS AND OTHER ----------
  backOrNext(input:boolean){
    if(input){

    }
  }

  /** Unsubscribe observable for subscriptions. */
  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private selectors: PageSelectors,
    private store: Store<fromStore.State>,
    private db: FirebaseService
  ) {
  }

  ngOnInit() { 
    // --------------- EVENT HANDLING ----------------------

    // --------------- LOAD DATA ---------------------------
    // Once everything is set up, load the data for the role.
  }

  ngOnDestroy() {
    // Unsubscribe subscriptions.
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    // Unsubscribe from firebase connection from load and free up memoized selector values.
    this.store.dispatch(new Cleanup(this.containerId));
    this.selectors.cleanup(this.containerId);
  }
}
