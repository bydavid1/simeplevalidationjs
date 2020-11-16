class Validation {

   constructor(rules, object) {
       this.rules = rules;
       this.object = object;
       this.errors = [];
   }

   validate () {
       for (const item of this.rules) {
           if (item.hasOwnProperty("field") && item.hasOwnProperty("validate")) {

               if (item.validate.hasOwnProperty("type")) {

                   const fieldName = item.field

                   if (this.object.hasOwnProperty(fieldName)) {

                       this.currentField = this.object[fieldName]
                       this.currentValType = item.validate.type
                       this.currentMessage = item.validate.message;
                       this.currentValue = item.validate.value;

                       switch (this.currentValType) {
                           case "numeric":

                           case "max":

                           case "min":

                           case "greaterThan":

                           case "equalTo":

                           case "required":

                           default:
                               console.warn("Validation type does not exist")
                       }

                   } else {
                       console.error(`Field ${field} does not exist`)
                   }

               } else {
                   console.error("Validation type is required")
               }

           } else {
               console.error("Field and validate are required")
           }
       }
   }

}


