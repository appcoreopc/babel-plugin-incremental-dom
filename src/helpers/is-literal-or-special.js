// Literals and `undefined` are treated as constant values in attributes and
// children.
export default function isLiteralOrUndefined(path) {
  return path.isLiteral() ||
    path.isUnaryExpression({ operator: "void" }) ||
    path.isIdentifier({ name: "undefined" }) ||
    path.isIdentifier({ name: "NaN" }) ||
    path.isIdentifier({ name: "Infinity" });
}
