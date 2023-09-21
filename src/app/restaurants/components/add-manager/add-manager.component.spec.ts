import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddManagerComponent } from './add-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddManagerComponent', () => {
  let component: AddManagerComponent;
  let fixture: ComponentFixture<AddManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AddManagerComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addManager event on form submission', () => {
    spyOn(component.addManager, 'emit');
    const formValue = {
      email: 'test@example.com',
      password: 'TestPassword123!',
    };
    component.form.setValue(formValue);
    const formElement: HTMLFormElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('ngSubmit'));

    expect(component.addManager.emit).toHaveBeenCalledWith(formValue);
  });

  it('should set email as required', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('');
    expect(emailControl?.hasError('required')).toBe(true);
  });
  it('should set email as invalid when not in email format', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('invalidemail');
    expect(emailControl?.hasError('email')).toBe(true);
  });

  it('should set password as required', () => {
    const passwordControl = component.form.get('password');
    passwordControl?.setValue('');
    expect(passwordControl?.hasError('required')).toBe(true);
  });


  it('should set password as weak for a weak password', () => {
    const passwordControl = component.form.get('password');
    passwordControl?.setValue('weakpassword');
    expect(passwordControl?.hasError('weakPassword')).toBe(true);
  });

  it('should not set password as weak for a valid password', () => {
    const passwordControl = component.form.get('password');
    passwordControl?.setValue('ValidPassword123!');
    expect(passwordControl?.hasError('weakPassword')).toBe(false);
  });
});
