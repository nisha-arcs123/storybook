import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSizesComponent } from './input-sizes.component';

describe('InputSizesComponent', () => {
  let component: InputSizesComponent;
  let fixture: ComponentFixture<InputSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
