export abstract class EntityGateway {
    private propertyMapper: any;

    constructor(propertyMapper) {
        this.propertyMapper = propertyMapper
    }
    // NOTE: These are propery mappers in order to "translate" source data to something
    //       that our domain understands and viceversa.
    protected mapToSource(data: any) {
        const mappedData = {};
        
        Object.keys(this.propertyMapper).forEach((key) => {
            const value = data[this.propertyMapper[key]];
            if (value) mappedData[key] = value;
        });

        return mappedData;
    }

    protected mapToDomain(data: any) {
        const mappedData = {};
        
        Object.keys(data).forEach((key) => {
            const newKey = this.propertyMapper[key];
            const value = data[key];
            if (value || value === 0) mappedData[newKey] = value;
        });

        return mappedData;
    };
}
