import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';

@NgModule({
  declarations: [ToolHeaderComponent, MyUppercasePipe],
  imports: [
    CommonModule
  ],
  exports: [ToolHeaderComponent, MyUppercasePipe]
})
export class SharedModule { }
