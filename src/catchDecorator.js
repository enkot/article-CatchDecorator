export const catchDecoratorStore = {
    handler: null,

    setHandler(handler) {
        this.handler = handler
    }
}

function Catch(localHandler) {
    return function(target, key, descriptor) {
        const originalMethod = descriptor.value

        descriptor.value = async function(...args) {
            try {
                return await originalMethod.apply(this, args)
            } catch (error) {
                const { handler } = catchDecoratorStore
                
                if (localHandler) {
                    localHandler.call(null, error, this)
                } else if(handler) {
                    handler()
                } else {
                    console.warn(error.message)
                }
            }
        }

        return descriptor
    }
}

export default Catch