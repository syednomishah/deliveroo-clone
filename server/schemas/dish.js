import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Dish name',
        validation: rule=> rule.required(),
    },
    {
        name: 'description',
        type: 'string',
        title: 'Description',
        validation: rule=> rule.max(200),
    },
    {
        name: 'image',
        type: 'image',
        title: 'image of the Dish',
    },
    {
      name: 'price',
      title: 'Price of the dish in GBP',
      type: 'number'
    }
  ]
})
