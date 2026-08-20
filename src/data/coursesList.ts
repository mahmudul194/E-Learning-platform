import { Course, REVIT_COURSES } from "./coursesRevitList";
import { OTHER_COURSES } from "./coursesOtherList";

export * from "./coursesRevitList";
export * from "./coursesOtherList";

export const COURSES: Course[] = [...REVIT_COURSES, ...OTHER_COURSES];
