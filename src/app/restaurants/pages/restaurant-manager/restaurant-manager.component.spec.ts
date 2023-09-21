import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantManagerComponent } from './restaurant-manager.component';
import { RestaurantsStoreFacadeService } from '../../store/restaurants-store-facade.service';
import { AddManagerBody } from '../../types/restaurant-manager';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('RestaurantManagerComponent', () => {
  let component: RestaurantManagerComponent;
  let fixture: ComponentFixture<RestaurantManagerComponent>;
  let mockFacade: jasmine.SpyObj<RestaurantsStoreFacadeService>;

  beforeEach(() => {
    mockFacade = jasmine.createSpyObj('RestaurantsStoreFacadeService', ['addRestaurantManager']);

    TestBed.configureTestingModule({
      imports: [RestaurantManagerComponent, BrowserModule, BrowserAnimationsModule],
      providers: [{ provide: RestaurantsStoreFacadeService, useValue: mockFacade }],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call facade.addRestaurantManager when onAddManager is called', () => {
    const restaurantId = 'testRestaurantId';
    const body: AddManagerBody = {
      email: 'test@example.com',
      password: 'password123'
    }
    component.restaurantId = restaurantId;

    component.onAddManager(body);

    expect(mockFacade.addRestaurantManager).toHaveBeenCalledWith({ restaurantId, body });
  });
});
