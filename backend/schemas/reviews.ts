import {type} from "os";
import { title } from "process";

export default {
     name: 'testimonials',
     type: 'array',
     title: 'Testimonials',
     of: [ // The "of"-property must be set, and it must be an array
    {
      type: 'home', // type is required
      title: 'Review'
          },
     ]
}