export const swagger = [
  {
    swagger: "2.0",
    info: {
      description:
        "Provide access to all meta data related to a CarMax retail location.",
      version: "1.0.0",
      title: "CarMax Stores API",
      contact: {
        email: "dan_rafferty@carmax.com",
      },
    },
    host: "api.carmax.org",
    basePath: "/kmx-stores-v1",
    schemes: ["https"],
    paths: {
      "/stores": {
        get: {
          tags: ["Stores"],
          operationId: "Stores_GetAll",
          consumes: [],
          produces: ["application/json"],
          parameters: [
            {
              name: "take",
              in: "query",
              required: false,
              type: "integer",
              format: "int32",
            },
            {
              name: "skip",
              in: "query",
              required: false,
              type: "integer",
              format: "int32",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "array",
                items: {
                  $ref: "#/definitions/StoreSummary",
                },
              },
            },
          },
        },
      },
      "/stores/{id}": {
        get: {
          tags: ["Stores"],
          operationId: "Stores_GetById",
          consumes: [],
          produces: ["application/json"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/StoreDetail",
              },
            },
          },
        },
      },
      "/phone-types": {
        get: {
          tags: ["Enumerations"],
          operationId: "PhoneTypes_GetAll",
          consumes: [],
          produces: ["application/json"],
          parameters: [],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "object",
              },
            },
          },
        },
      },
      "/store-types": {
        get: {
          tags: ["Enumerations"],
          operationId: "StoreTypes_GetAll",
          consumes: [],
          produces: ["application/json"],
          parameters: [],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "object",
              },
            },
          },
        },
      },
      "/system/health": {
        get: {
          tags: ["System"],
          operationId: "System_Health",
          consumes: [],
          produces: ["application/json"],
          parameters: [],
          responses: {
            200: {
              description: "OK",
              schema: {
                type: "object",
              },
            },
          },
        },
      },
    },
    definitions: {
      StoreSearchCriteria: {
        type: "object",
        properties: {
          Take: {
            type: "integer",
            format: "int32",
          },
          Skip: {
            type: "integer",
            format: "int32",
          },
        },
      },
      StoreSummary: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          Name: {
            type: "string",
          },
          Address: {
            type: "string",
          },
          City: {
            type: "string",
          },
          State: {
            type: "string",
          },
          Zip: {
            type: "string",
          },
          Phone: {
            type: "string",
          },
          TimeZone: {
            $ref: "#/definitions/TimeZoneInformation",
          },
          StoreType: {
            type: "string",
          },
        },
      },
      TimeZoneInformation: {
        type: "object",
        properties: {
          Name: {
            type: "string",
          },
        },
      },
      StoreDetail: {
        type: "object",
        properties: {
          Fax: {
            type: "string",
          },
          GrandOpening: {
            type: "string",
            format: "date-time",
          },
          Address2: {
            type: "string",
          },
          County: {
            type: "string",
          },
          DaylightSavings: {
            type: "boolean",
          },
          Latitude: {
            type: "number",
            format: "double",
          },
          Longitude: {
            type: "number",
            format: "double",
          },
          StoreHours: {
            type: "array",
            items: {
              $ref: "#/definitions/TimeRange",
            },
          },
          ServiceHours: {
            type: "array",
            items: {
              $ref: "#/definitions/TimeRange",
            },
          },
          HolidayHours: {
            type: "array",
            items: {
              $ref: "#/definitions/DateTimeRange",
            },
          },
          PhoneNumbers: {
            type: "array",
            items: {
              $ref: "#/definitions/PhoneNumber",
            },
          },
          id: {
            type: "string",
          },
          Name: {
            type: "string",
          },
          Address: {
            type: "string",
          },
          City: {
            type: "string",
          },
          State: {
            type: "string",
          },
          Zip: {
            type: "string",
          },
          Phone: {
            type: "string",
          },
          TimeZone: {
            $ref: "#/definitions/TimeZoneInformation",
          },
          StoreType: {
            type: "string",
          },
        },
      },
      TimeRange: {
        type: "object",
        properties: {
          StartDayOfWeek: {
            type: "string",
            enum: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          EndDayOfWeek: {
            type: "string",
            enum: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          StartHour: {
            type: "string",
          },
          EndHour: {
            type: "string",
          },
        },
      },
      DateTimeRange: {
        type: "object",
        properties: {
          Description: {
            type: "string",
            example: "Christmas Holiday",
          },
          StartTime: {
            type: "string",
            format: "date-time",
            example: "2017-12-25T00:00:00.000Z",
          },
          EndTime: {
            type: "string",
            format: "date-time",
            example: "2017-12-26T06:00:00.000Z",
          },
        },
      },
      PhoneNumber: {
        type: "object",
        properties: {
          Type: {
            type: "string",
            example: "Store",
          },
          Number: {
            type: "string",
            example: "1-804-555-1212",
          },
        },
      },
    },
  },
];
