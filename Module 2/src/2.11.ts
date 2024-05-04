/*
 * Title: Utility Types
 * Description:
 * Author: Md. Atikur Rahaman
 * Date: 04-05-2024
 */

{
  /*
   * Readonly<Type> - Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
   * Partial<Type> - Constructs a type with all properties of Type set to optional.
   * Required<Type> - Constructs a type consisting of all properties of Type set to required.
   * Pick<Type, Keys> - Constructs a type by picking the set of properties Keys from Type.
   * Record<Keys, Type> - Constructs a type with a set of properties Keys of type Type.
   * Exclude<Type, ExcludedUnion> - Constructs a type by excluding from Type all properties that are assignable to ExcludedUnion.
   * Extract<Type, Union> - Constructs a type by extracting from Type all properties that are assignable to Union.
   * NonNullable<Type> - Constructs a type by excluding null and undefined from Type.
   * Parameters<Type> - Obtains the parameters of a function type in a tuple.
   * ConstructorParameters<Type> - Obtains the parameters of a constructor function type in a tuple.
   * ReturnType<Type> - Obtains the return type of a function type.
   * InstanceType<Type> - Obtains the instance type of a constructor function type.
   * ThisParameterType<Type> - Extracts the type of the this parameter of a function type.
   * OmitThisParameter<Type> - Removes the this parameter from a function type.
   * ThisType<Type> - This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type.
   */

  interface Person {
    name: string;
    age: number;
    email?: string;
    phone?: string;
  }

  type ReadOnlyPerson = Readonly<Person>;
  type PartialPerson = Partial<Person>;
  type RequiredPerson = Required<Person>;
  type PickPerson = Pick<Person, "name" | "age">;
  type RecordPerson = Record<"person", Person>;

  const person: RecordPerson = {
    person: {
      name: "Atik",
      age: 25,
      email: "email",
      phone: "01700000000",
    },
  };
  console.log(person);

  type PhoneOmit = Omit<Person, "phone">;

  const emptyObj: Record<string, unknown> = {};
}
