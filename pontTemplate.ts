import { BaseClass, CodeGenerator } from 'pont-engine'

export default class MyGenerator extends CodeGenerator {
  getBaseClassInDeclaration(base: BaseClass) {
    const data = super.getBaseClassInDeclaration(base)
    return data.replace(/object/g, 'Record<string, any>')
  }
}
