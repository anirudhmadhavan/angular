import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

// Shared module which exports common modules and components
@NgModule({
   declarations: [StarComponent, ConvertToSpacesPipe],
   // StarComponent needs CommonModule so importing here
   imports: [CommonModule],
   // No need to import FormsModule to export
   exports: [StarComponent, FormsModule, CommonModule, ConvertToSpacesPipe],
})
export class SharedModule {}
