import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';

import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {AppRoutingModule} from './app-routing.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EditCourseLessonsComponent } from './edit-course-lessons/edit-course-lessons.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { CourseComponent } from './course/course.component';
import { CourseLandingPageComponent } from './course-landing-page/course-landing-page.component';
import { EditLessonsToolbarComponent } from './edit-lessons-toolbar/edit-lessons-toolbar.component';
import {NgxWigModule} from 'ngx-wig';


@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent,
    EditCourseLessonsComponent,
    EditLessonComponent,
    FooterComponent,
    CoursesComponent,
    TopMenuComponent,
    CourseComponent,
    CourseLandingPageComponent,
    EditLessonsToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatGridListModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxWigModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
