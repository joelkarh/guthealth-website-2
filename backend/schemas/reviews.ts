import {type} from "os";
import {title} from "process";

export default {
    name : 'reviews',
    type : 'document',
    title : 'Reviews',

    fields : [
        {
            name: 'client_review',
            type: 'object',
            fields: [
                {
                    name: 'firstname',
                    type: 'string',
                    title: 'First Name'
                }, {
                    name: 'Lastname',
                    type: 'string',
                    title: 'Last Name'
                }, {
                    name: 'client_image',
                    type: 'image',
                    title: 'Client Image',
                    options: {
                        hotspot: true // <-- Defaults to false
                    }
                }, {
                    name: 'review_content',
                    type: 'array',
                    title: 'Review Content',
                    of: [
                        {
                            type: 'block'
                        }
                    ]
                }

            ]
        }
    ]
}