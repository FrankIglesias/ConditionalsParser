Node = 
	"<" _ variable:TagName _ props:Properties* _ ">"_ ch:(Node+/Text)*"</" _ variable2:TagName _ ">" 
    { if(variable === variable2)
    	return {type: variable,
        		properties: props,
        		children: ch}
       else
       	return error(`El tag ${variable} se encuentra abierto`)
     }
    / "<" _ variable:TagName _ props:Properties* _ "/>" {return {type: variable, properties:props}}
    
TagName = value:([a-z,A-Z])+ {return value.join('')}
Text = value:([a-z,A-Z]) {return value.join('')}
_ = [ \t\n\r]*
Properties = name:[a-z,A-Z]+ "=\"" val:[a-z,A-Z]+ "\"" {return {property:name.join(''), value: val.join('')}}