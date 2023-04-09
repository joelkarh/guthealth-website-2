
// schemas/home.ts
export default {
    name : 'home',
    type : 'document',
    title : 'Home',
    fields : [
        {
            name: 'hero_title',
            type: 'string',
            title: 'Hero Title',
            description: 'Enter the hero title'
        }, {
            name: 'hero_subtitle',
            type: 'string',
            title: 'Hero Subtitle',
            description: 'Enter the hero subtitle'
        }, {
            name: 'hero_Image',
            type: 'image',
            title: 'Hero Image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption'
                }
            ]
        }, {
            name: 'section',
            type: 'object',
            title:'Section',
            fields: [
                {
                    name: 'section_title',
                    type: 'string',
                    title: 'Title',
                   
                }, {
                    name: 'section_subtitle',
                    type: 'string',
                    title: 'Subtitle',
                    
                }
            ]
        }, {
            name: 'steps',
            type: 'object',
            title: 'Steps',
            description: 'Enter text about the steps',
            options: {
                collapsible: true,
                collapsed: true
            },
            fields: [
                {
                    name: 'step_1',
                    type: 'object',
                    title: 'Step 1',
                    fields: [
                        {
                            name: 'step_title_1',
                            type: 'string',
                            title: 'Title'
                        }, {
                            name: 'step_description_1',
                            type: 'string',
                            title: 'Description'
                        }
                    ]
                }, {
                    name: 'step_2',
                    type: 'object',
                    title: 'Step 2',
                    options: {
                        collapsible: true,
                        collapsed: true
                    },
                    fields: [
                        {
                            name: 'step_title_2',
                            type: 'string',
                            title: 'Title'
                        }, {
                            name: 'step_description_2',
                            type: 'string',
                            title: 'Description'
                        }
                    ]
                }, {
                    name: 'step_3',
                    type: 'object',
                    title: 'Step 3',
                    options: {
                        collapsible: true,
                        collapsed: true
                    },
                    fields: [
                        {
                            name: 'step_title_3',
                            type: 'string',
                            title: 'Title'
                        }, {
                            name: 'step_description_3',
                            type: 'string',
                            title: 'Description '
                        }
                    ]
                }
            ]
        }, {
            name: 'section_2',
            type: 'object',
            title: 'Section 2',
            fields: [
                {
                    name: 'section_2_title',
                    type: 'string',
                    title: 'Title'
                }, {
                    name: 'section_2_description',
                    type: 'string',
                    title: 'Description'
                }, {
                    name: 'section_2_truths',
                    type: 'object',
                    fieldsets: [
                        {
                            name: 'truths',
                            title: 'Truths',
                            options: {
                                collapsible: true,
                                collapsed: false,
                                columns: 2, // Defines a grid for the fields and how many columns it should have
                            }
                        }
                    ],
                    fields: [
                        {
                            name: 'truth_1',
                            type: 'string',
                            title: 'Truth 1',
                            fieldset: 'truths'
                        }, {
                            name: 'truth_2',
                            type: 'string',
                            title: 'Truth 2',
                            fieldset: 'truths'
                        }, {
                            name: 'truth_3',
                            type: 'string',
                            title: 'Truth 3',
                            fieldset: 'truths'
                        }, {
                            name: 'truth_4',
                            type: 'string',
                            title: 'Truth 4',
                            fieldset: 'truths'
                        }
                    ]
                }
            ]
        }, {
            name: 'section_3_quote',
            type: 'object',
            fieldsets: [
                {
                    name: 'quote',
                    title: 'Quote'
                }
            ],
            fields: [
                {
                    name: 'quote_title',
                    type: 'string',
                    title: 'Title',
                    fieldset: 'quote'
                }, {
                    name: 'quote_author',
                    type: 'string',
                    title: 'Author',
                    fieldset: 'quote'
                }
            ]
        }, {
            name: 'section_3',
            type: 'object',
            title: 'Section 3',
            fields: [
                {
                    name: 'section_3_title',
                    type: 'string',
                    title: 'Title'

                }, {
                    name: 'section_3_subtitle',
                    type: 'string',
                    title: 'Subtitle'
                }, {
                    name: 'section_offers',
                    type: 'object',
                    fieldsets: [
                        {
                            name: 'offers',
                            title: 'Offers'
                        }
                      ],
                      fields: [
                           {
                                name: 'offer_1',
                                type: 'object',
                                title: 'Offer 1',
                                fields: [
                                     {
                                          name: 'offer_1_title',
                                          type: 'string',
                                          title:'Title'
                                     },
                                     {
                                        name: 'offer_1_description',
                                        type: 'string',
                                        title:'Description'
                                     },
                                     {
                                        name: 'offer_1_quote',
                                        type: 'string',
                                        title:'Quote'
                                     },
                                     {
                                        name: 'offer_1_author',
                                        type: 'string',
                                        title:'author'
                                     },
                                     {
                                        name: 'offer_1_image',
                                        type: 'image',
                                        title: 'Offer 1 image',
                                        options: {
                                            hotspot: true // <-- Defaults to false
                                        },
                                        fields: [
                                            {
                                                name: 'caption',
                                                type: 'string',
                                                title: 'Caption'
                                            }
                                        ]
                                    }, 
                                ]
                           },
                           {
                              name: 'offer_2',
                              type: 'object',
                              title: 'Offer 2',
                              fields: [
                                   {
                                        name: 'offer_2_title',
                                        type: 'string',
                                        title:'Title'
                                   },
                                   {
                                      name: 'offer_2_description',
                                      type: 'string',
                                      title:'Description'
                                   },
                                   {
                                      name: 'offer_2_quote',
                                      type: 'string',
                                      title:'Quote'
                                   },
                                   {
                                      name: 'offer_2_author',
                                      type: 'string',
                                      title:'author'
                                   },
                                   {
                                        name: 'offer_2_image',
                                        type: 'image',
                                        title: 'Offer 2 image',
                                        options: {
                                            hotspot: true // <-- Defaults to false
                                        },
                                        fields: [
                                            {
                                                name: 'caption',
                                                type: 'string',
                                                title: 'Caption'
                                            }
                                        ]
                                    },
                              ]
                           },
                           {
                              name: 'offer_3',
                              type: 'object',
                              title: 'Offer 3',
                              fields: [
                                   {
                                        name: 'offer_3_title',
                                        type: 'string',
                                        title:'Title'
                                   },
                                   {
                                      name: 'offer_3_description',
                                      type: 'string',
                                      title:'Description'
                                   },
                                   {
                                      name: 'offer_3_quote',
                                      type: 'string',
                                      title:'Quote'
                                   },
                                   {
                                      name: 'offer_3_author',
                                      type: 'string',
                                      title:'author'
                                   },
                                   {
                                        name: 'offer_3_image',
                                        type: 'image',
                                        title: 'Offer 3 image',
                                        options: {
                                            hotspot: true // <-- Defaults to false
                                        },
                                        fields: [
                                            {
                                                name: 'caption',
                                                type: 'string',
                                                title: 'Caption'
                                            }
                                        ]
                                    },
                              ]
                        }
                     ]
                }
            ]
         },
         {
              name: 'section_4',
              type: 'object',
              fieldsets: [
                   {
                        name: 'testimonials',
                        title: 'Testimonials'
                   }
              ],
              fields: [
                   {
                        name: 'name',
                        type: 'string',
                        title: 'Name',
                        fieldset:'testimonials'
                   },
                   {
                        name: 'testimonial_image',
                        type: 'image',
                        title: 'Image',
                        fieldset:'testimonials',
                        options: {
                         hotspot: true // <-- Defaults to false
                     },
                   },
                   {
                        name: 'review',
                        type: 'array',
                        title: 'Reviews',
                        of: [{type: 'reviews'}]
                   }
              ]
         }
     ],
     initialValue: {
          isHighlighted: false
        }
}
