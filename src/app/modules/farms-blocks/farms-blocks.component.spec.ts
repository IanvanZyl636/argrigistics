import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsBlocksComponent } from './farms-blocks.component';
import { PageModule } from '../../shared/components/page/page.module';

describe('FarmsBlocksComponent', () => {
  let component: FarmsBlocksComponent;
  let fixture: ComponentFixture<FarmsBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmsBlocksComponent],
      imports: [PageModule],
    });
    fixture = TestBed.createComponent(FarmsBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
