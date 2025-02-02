import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLongportGqlInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
