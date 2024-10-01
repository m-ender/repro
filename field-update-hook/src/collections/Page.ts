import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "input",
      type: "text",
      hooks: {
        beforeChange: [
          ({ data, value, operation }) => {
            if (data) {
              data.parsedData = `{ "source": "${value}" }`;
            }
            return value;
          },
        ],
      },
    },
    {
      name: "parsedData",
      type: "json",
    },
  ],
}
