import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipe],
  // We don't import FormsModule because we don't need it here. If our component did use
  // two-way binding or we added another component here that did, we'd need to import FormsModule as well.
  imports: [CommonModule],
  // The exports array defines what this Angular module shares with any module that imports it.
  // We export the StarComponent. That way it is available to the components and any module that
  // imports the SharedModule. We reexport the CommonModule and FormsModule so their directives and
  //  other features are available to any module that imports the SharedModule. And notice here that
  // we can export something without importing it first (FormsModule).
  exports: [StarComponent, ConvertToSpacesPipe, CommonModule, FormsModule],
})
export class SharedModule {}
