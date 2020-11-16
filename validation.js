/**
 * @file Simple validations: numeric, max, min, greatherThan, equalTo, required
 * @author Byron Jimenez
 * @version 0.1
 */

class Validation {

    /**
     * @param {Array} rules
     * @param {Object} object
     * @description vcontructor.
     */
    constructor(rules, object) {
        this.rules = rules;
        this.object = object;
        this.errors = [];

        this.defaultMessages = {
            numeric : (field) => `${field} is not numeric`,
            max : (field, value) => `${field} value is greather than ${value}`,
            min : (field, value) => `${field} value is greather than ${value}`,
            greaterThan : (field, value) => `${field} value is not greather than ${value}`,
            equalTo : (field, value) => `${field} value is not equal to ${value}`,
            required : (field) => `${field} is required`
        }

    }

    /**
     * @returns {Object}
     * @description validate object values ​​according to rules.
     */
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

                                if (!this.validateNumeric()) {
                                    this.setError()
                                }

                            case "max":

                                if (!this.validateMax()) {
                                    tthis.setError()
                                }

                            case "min":

                                if (!this.validateMin()) {
                                    this.setError()
                                }

                            case "greaterThan":

                                if (!this.validateGreaterThan()) {
                                    this.setError()
                                }

                            case "equalTo":

                                if (!this.validateEqualTo()) {
                                    this.setError()
                                }

                            case "required":

                                if (!this.validateRequired()) {
                                    this.setError()
                                }

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

    setError() {
        this.errors.push(this.setMessage())
    }

    setMessage() {
        if (this.currentMessage == undefined) {
            return this.rules.defaultMessages[this.currentValType](this.currentField)
        } else {
            return this.currentMessage
        }
    }

    validateNumeric() {
        if (isNaN(this.currentField)) {
            return false
        } else {
            return true
        }
    }

    validateMax() {
        if (this.currentField > this.currentValue) {
            return false
        } else {
            return true
        }
    }

    validateMin() {
        if (this.currentField < this.currentValue) {
            return false
        } else {
            return true
        }
    }

    validateGreaterThan() {
        if (this.currentField < this.currentValue) {
            return false
        } else {
            return true
        }
    }

    validateEqualTo() {
        if (this.currentField === this.currentValue) {
            return true
        } else {
            return false
        }
    }

    validateRequired() {
        if (this.currentField.trim().length === 0) {
            return true
        } else {
            return false
        }
    }

 }


export default Validation;
