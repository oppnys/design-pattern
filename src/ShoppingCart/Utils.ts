export function log(type: string) {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        const oldValue = descriptor.value
        descriptor.value = function () {
            console.log(`日志上报：${type}`)
            return oldValue.apply(this, arguments)
        }
        return descriptor
    }
}
