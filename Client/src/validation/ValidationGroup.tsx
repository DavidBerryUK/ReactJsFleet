
import { Component }                            from 'react';
import React                                    from 'react';
import ValidationField                          from './ValidationField';


export default class ValidationGroup extends Component {



    componentDidMount() {
        console.log("ValidationGroup: Component Did Mount");
        this.parseValidationFields();        
    }

    //
    // Parse all child <ValidationField> elements within the <ValidationGroup> element
    //
    private parseValidationFields() {
        const children = React.Children.toArray(this.props.children)                
        children.forEach((field) => {                                                       
            this.parseField(field);
        })
    }

    //
    // Prase field, determine if it is a <ValidationField> element
    // 
    private parseField(field: any) {
        var elementTypeName = ((field as any).type.name);

        // determine and validate element type
        if ( elementTypeName === ValidationField.name) {
            
             var validationField = field as ValidationField;
             const validationChildren = React.Children.toArray(validationField.props.children)  

             // validate there is only 1 child field within the <ValidationField> element
             if ( validationChildren.length > 1) {
                throw new Error('Only 1 child element may exist in a ValidationField');
             }             
             if ( validationChildren.length === 1 ) {
                 this.addValidationFieldToGroup(validationField, validationChildren[0])
             }
        }                                
    }

    private addValidationFieldToGroup(validationField : ValidationField,  childElement: any) {
        console.log("We have found a nice validation field");
        console.log(validationField);
        //(validationField.props as any).setGroup(this);
        //console.log(validationField.props.rules);        
        //console.log(validationField.setState(this));
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}