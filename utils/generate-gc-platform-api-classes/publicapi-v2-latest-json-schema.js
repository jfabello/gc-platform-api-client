const gcPlatformAPISpecSchema = {
	type: "object",
	required: ["tags", "paths", "definitions"],
	properties: {
		tags: {
			type: "array",
			minItems: 1,
			items: {
				type: "object",
				required: ["name"],
				properties: {
					name: { type: "string", minLength: 1 },
					description: { type: "string" },
					externalDocs: {
						type: "object",
						required: ["url"],
						properties: {
							description: { type: "string" },
							url: { type: "string", minLength: 1 }
						},
						additionalProperties: false
					}
				},
				additionalProperties: false
			}
		},
		paths: {
			type: "object",
			minProperties: 1,
			patternProperties: {
				"^/api/v2(/([A-Za-z0-9]+|\\{[A-Za-z0-9]+\\}))+$": {
					type: "object",
					minProperties: 1,
					patternProperties: {
						"^(get|post|put|patch|delete|head)$": {
							type: "object",
							required: ["tags", "summary", "operationId", "parameters"],
							properties: {
								"tags": {
									type: "array",
									minItems: 1,
									items: { type: "string", minLength: 1 }
								},
								"summary": { type: "string", minLength: 1 },
								"description": { type: "string" },
								"operationId": { type: "string", minLength: 1 },
								"consumes": {
									type: "array",
									minItems: 1,
									items: {
										type: "string",
										minLength: 1
									}
								},
								"produces": {
									type: "array",
									minItems: 1,
									items: {
										type: "string",
										minLength: 1
									}
								},
								"parameters": {
									type: "array",
									items: {
										type: "object",
										required: ["name", "in", "required"],
										properties: {
											"name": { type: "string", minLength: 1 },
											"in": { type: "string", enum: ["header", "path", "query", "body"] },
											"description": { type: "string" },
											"required": { type: "boolean" },
											"type": { type: "string", enum: ["boolean", "integer", "number", "string", "array"] },
											"format": { type: "string", enum: ["int32", "int64", "float", "interval", "date-time", "date"] },
											"default": {},
											"enum": { type: "array", minItems: 1, items: { type: "string" } },
											"schema": {
												type: "object",
												properties: {
													$ref: { type: "string", pattern: "^#/definitions/[A-Z][A-Za-z0-9]+$" },
													type: { type: "string", enum: ["string", "object", "array"] },
													items: {
														type: "object",
														properties: {
															$ref: { type: "string", pattern: "^#/definitions/[A-Z][A-Za-z0-9]+$" },
															type: { type: "string", enum: ["string"] }
														},
														oneOf: [{ required: ["$ref"] }, { required: ["type"] }],
														additionalProperties: false
													},
													additionalProperties: {
														type: "object",
														required: ["type"],
														properties: {
															type: { type: "string", enum: ["object"] }
														},
														additionalProperties: false
													}
												},
												oneOf: [{ required: ["$ref"] }, { required: ["type"] }],
												additionalProperties: false
											},
											"items": {
												type: "object",
												required: ["type"],
												properties: {
													type: { type: "string", enum: ["string"] },
													enum: { type: "array", minItems: 1, items: { type: "string" } },
													default: {}
												},
												additionalProperties: false
											},
											"collectionFormat": { type: "string", enum: ["multi"] },
											"x-example": { type: "string" }
										},
										if: {
											properties: {
												in: { const: "body" }
											}
										},
										then: {
											required: ["schema"],
											not: {
												required: ["type"]
											}
										},
										else: {
											required: ["type"],
											not: {
												required: ["schema"]
											}
										},
										additionalProperties: false
									}
								},
								"responses": {
									type: "object",
									patternProperties: {
										"^[1-5][0-9][0-9]$": {
											type: "object",
											properties: {
												"description": { type: "string" },
												"schema": {
													type: "object",
													properties: {
														$ref: { type: "string", pattern: "^#/definitions/[A-Z][A-Za-z0-9]+$" },
														type: { type: "string", enum: ["integer", "string", "object", "array"] },
														format: { type: "string", enum: ["int32"] },
														enum: {
															type: "array",
															minItems: 1,
															items: {
																type: "string",
																minLength: 1
															}
														},
														items: {
															type: "object",
															properties: {
																$ref: { type: "string", pattern: "^#/definitions/[A-Z][A-Za-z0-9]+$" },
																type: { type: "string", enum: ["string", "object"] }
															},
															oneOf: [{ required: ["$ref"] }, { required: ["type"] }],
															additionalProperties: false
														},
														uniqueItems: { type: "boolean" },
														additionalProperties: {
															type: "object",
															properties: {
																type: { type: "string", enum: ["object"] }
															},
															additionalProperties: false
														}
													},
													oneOf: [{ required: ["$ref"] }, { required: ["type"] }],
													additionalProperties: false
												},
												"x-inin-error-codes": {
													type: "object",
													additionalProperties: {
														type: "string"
													}
												}
											},
											additionalProperties: false
										},
										"default": {
											type: "object",
											required: ["description"],
											properties: {
												description: { type: "string", minLength: 1 }
											},
											additionalProperties: false
										}
									},
									additionalProperties: false
								},
								"security": {
									type: "array",
									minItems: 1,
									items: {
										type: "object",
										properties: {
											"PureCloud OAuth": {
												type: "array",
												items: {
													type: "string",
													minLength: 1
												}
											},
											"Guest Chat JWT": {
												type: "array",
												items: {
													type: "string"
												}
											},
											"Webmessaging JWT": {
												type: "array",
												items: {
													type: "string"
												}
											}
										},
										additionalProperties: false
									}
								},
								"deprecated": { type: "boolean" },
								"x-inin-requires-permissions": {
									type: "object",
									required: ["type", "permissions"],
									properties: {
										type: { type: "string", enum: ["ALL", "ANY"] },
										permissions: {
											type: "array",
											minItems: 1,
											items: {
												type: "string",
												minLength: 1
											}
										}
									},
									additionalProperties: false
								},
								"x-purecloud-method-name": { type: "string" }
							},
							additionalProperties: false
						}
					},
					additionalProperties: false
				}
			},
			additionalProperties: false
		},
		definitions: {
			type: "object",
			minProperties: 1,
			patternProperties: {
				"^[A-Z][A-Za-z0-9]+$": {
					type: "object",
					required: ["type"],
					properties: {
						type: { type: "string", enum: ["object"] },
						required: { type: "array", items: { type: "string", minLength: 1 } },
						description: { type: "string", minLength: 1 },
						properties: {
							type: "object",
							additionalProperties: {
								type: "object",
								properties: {
									"type": { type: "string", enum: ["boolean", "integer", "number", "string", "object", "array"] },
									"format": { type: "string", enum: ["int32", "int64", "float", "double", "date-time", "local-date-time", "date", "local-time", "uri", "url"] },
									"enum": { type: "array", minItems: 1, items: { oneOf: [{ type: "string" }, { type: "integer" }] } },
									"pattern": { type: "string", minLength: 1 },
									"description": { type: "string", minLength: 1 },
									"example": {},
									"position": { type: "integer" },
									"readOnly": { type: "boolean" },
									"allowEmptyValue": { type: "boolean" },
									"minLength": { type: "integer", minimum: 0 },
									"maxLength": { type: "integer", minimum: 0 },
									"minItems": { type: "integer", minimum: 0 },
									"maxItems": { type: "integer", minimum: 0 },
									"minimum": { type: "integer" },
									"maximum": { type: "integer" },
									"uniqueItems": { type: "boolean" },
									"items": {
										type: "object",
										properties: {
											type: { type: "string", enum: ["integer", "number", "string", "object", "array"] },
											format: { type: "string", enum: ["int32", "int64", "float", "double", "date-time", "date", "uri"] },
											enum: { type: "array", minItems: 1, items: { type: "string" } },
											description: { type: "string", minLength: 1 },
											items: {
												type: "object",
												required: ["type"],
												properties: {
													type: { type: "string", enum: ["string"] }
												},
												additionalProperties: false
											},
											additionalProperties: {
												type: "object",
												properties: {
													type: { type: "string", enum: ["object"] },
													$ref: { type: "string", pattern: "^#/definitions/[A-Z][A-Za-z0-9]+$" }
												},
												oneOf: [{ required: ["$ref"] }, { required: ["type"] }],
												additionalProperties: false
											},
											$ref: { type: "string", pattern: "^#/definitions/[A-Z][A-Za-z0-9]+$" }
										},
										oneOf: [{ required: ["$ref"] }, { required: ["type"] }],
										additionalProperties: false
									},
									"additionalProperties": {
										type: "object",
										properties: {
											type: { type: "string", enum: ["boolean", "integer", "number", "string", "object", "array"] },
											format: { type: "string", enum: ["int32", "int64", "double"] },
											enum: { type: "array", minItems: 1, items: { type: "string" } },
											uniqueItems: { type: "boolean" },
											items: {
												type: "object",
												properties: {
													type: { type: "string", enum: ["string"] },
													enum: { type: "array", minItems: 1, items: { type: "string" } },
													$ref: { type: "string", pattern: "^#/definitions/[A-Z][A-Za-z0-9]+$" }
												},
												additionalProperties: false
											},
											$ref: { type: "string", pattern: "^#/definitions/[A-Z][A-Za-z0-9]+$" }
										},
										oneOf: [{ required: ["$ref"] }, { required: ["type"] }],
										additionalProperties: false
									},
									"$ref": { type: "string", pattern: "^#/definitions/[A-Z][A-Za-z0-9]+$" },
									"x-genesys-entity-type": {
										type: "object",
										required: ["value"],
										properties: {
											value: { type: "string", minLength: 1 }
										},
										additionalProperties: false
									},
									"x-genesys-search-fields": {
										type: "object",
										required: ["value"],
										properties: {
											value: { type: "array", minItems: 1, items: { type: "string", minLength: 1 } }
										},
										additionalProperties: false
									}
								},
								oneOf: [{ required: ["$ref"] }, { required: ["type"] }],
								additionalProperties: false
							}
						}
					},
					additionalProperties: false
				}
			},
			additionalProperties: false
		}
	}
};

export { gcPlatformAPISpecSchema };
