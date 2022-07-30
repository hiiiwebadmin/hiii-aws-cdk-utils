# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseFargateService <a name="BaseFargateService" id="hiii-aws-cdk-utils.BaseFargateService"></a>

#### Initializers <a name="Initializers" id="hiii-aws-cdk-utils.BaseFargateService.Initializer"></a>

```typescript
import { BaseFargateService } from 'hiii-aws-cdk-utils'

new BaseFargateService(scope: Construct, id: string, props: BaseFargateServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateService.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateService.Initializer.parameter.props">props</a></code> | <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps">BaseFargateServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="hiii-aws-cdk-utils.BaseFargateService.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="hiii-aws-cdk-utils.BaseFargateService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="hiii-aws-cdk-utils.BaseFargateService.Initializer.parameter.props"></a>

- *Type:* <a href="#hiii-aws-cdk-utils.BaseFargateServiceProps">BaseFargateServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="hiii-aws-cdk-utils.BaseFargateService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateService.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="hiii-aws-cdk-utils.BaseFargateService.isConstruct"></a>

```typescript
import { BaseFargateService } from 'hiii-aws-cdk-utils'

BaseFargateService.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="hiii-aws-cdk-utils.BaseFargateService.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateService.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateService.property.service">service</a></code> | <code>@aws-cdk/aws-ecs.FargateService[]</code> | The service(s) created from the task(s). |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateService.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | The VPC. |

---

##### `node`<sup>Required</sup> <a name="node" id="hiii-aws-cdk-utils.BaseFargateService.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `service`<sup>Required</sup> <a name="service" id="hiii-aws-cdk-utils.BaseFargateService.property.service"></a>

```typescript
public readonly service: FargateService[];
```

- *Type:* @aws-cdk/aws-ecs.FargateService[]

The service(s) created from the task(s).

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="hiii-aws-cdk-utils.BaseFargateService.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

The VPC.

---


### CNameService <a name="CNameService" id="hiii-aws-cdk-utils.CNameService"></a>

#### Initializers <a name="Initializers" id="hiii-aws-cdk-utils.CNameService.Initializer"></a>

```typescript
import { CNameService } from 'hiii-aws-cdk-utils'

new CNameService(scope: Construct, id: string, props: CNameProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.CNameService.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.CNameService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.CNameService.Initializer.parameter.props">props</a></code> | <code><a href="#hiii-aws-cdk-utils.CNameProps">CNameProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="hiii-aws-cdk-utils.CNameService.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="hiii-aws-cdk-utils.CNameService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="hiii-aws-cdk-utils.CNameService.Initializer.parameter.props"></a>

- *Type:* <a href="#hiii-aws-cdk-utils.CNameProps">CNameProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.CNameService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="hiii-aws-cdk-utils.CNameService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.CNameService.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="hiii-aws-cdk-utils.CNameService.isConstruct"></a>

```typescript
import { CNameService } from 'hiii-aws-cdk-utils'

CNameService.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="hiii-aws-cdk-utils.CNameService.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.CNameService.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="hiii-aws-cdk-utils.CNameService.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---


### DualAlbFargateService <a name="DualAlbFargateService" id="hiii-aws-cdk-utils.DualAlbFargateService"></a>

#### Initializers <a name="Initializers" id="hiii-aws-cdk-utils.DualAlbFargateService.Initializer"></a>

```typescript
import { DualAlbFargateService } from 'hiii-aws-cdk-utils'

new DualAlbFargateService(scope: Construct, id: string, props: DualAlbFargateServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.Initializer.parameter.props">props</a></code> | <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps">DualAlbFargateServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="hiii-aws-cdk-utils.DualAlbFargateService.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="hiii-aws-cdk-utils.DualAlbFargateService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="hiii-aws-cdk-utils.DualAlbFargateService.Initializer.parameter.props"></a>

- *Type:* <a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps">DualAlbFargateServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="hiii-aws-cdk-utils.DualAlbFargateService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="hiii-aws-cdk-utils.DualAlbFargateService.isConstruct"></a>

```typescript
import { DualAlbFargateService } from 'hiii-aws-cdk-utils'

DualAlbFargateService.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="hiii-aws-cdk-utils.DualAlbFargateService.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.property.service">service</a></code> | <code>@aws-cdk/aws-ecs.FargateService[]</code> | The service(s) created from the task(s). |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | The VPC. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.property.externalAlb">externalAlb</a></code> | <code>@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer</code> | The external ALB. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService.property.internalAlb">internalAlb</a></code> | <code>@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer</code> | The internal ALB. |

---

##### `node`<sup>Required</sup> <a name="node" id="hiii-aws-cdk-utils.DualAlbFargateService.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `service`<sup>Required</sup> <a name="service" id="hiii-aws-cdk-utils.DualAlbFargateService.property.service"></a>

```typescript
public readonly service: FargateService[];
```

- *Type:* @aws-cdk/aws-ecs.FargateService[]

The service(s) created from the task(s).

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="hiii-aws-cdk-utils.DualAlbFargateService.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

The VPC.

---

##### `externalAlb`<sup>Optional</sup> <a name="externalAlb" id="hiii-aws-cdk-utils.DualAlbFargateService.property.externalAlb"></a>

```typescript
public readonly externalAlb: ApplicationLoadBalancer;
```

- *Type:* @aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer

The external ALB.

---

##### `internalAlb`<sup>Optional</sup> <a name="internalAlb" id="hiii-aws-cdk-utils.DualAlbFargateService.property.internalAlb"></a>

```typescript
public readonly internalAlb: ApplicationLoadBalancer;
```

- *Type:* @aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer

The internal ALB.

---


### DualNlbFargateService <a name="DualNlbFargateService" id="hiii-aws-cdk-utils.DualNlbFargateService"></a>

#### Initializers <a name="Initializers" id="hiii-aws-cdk-utils.DualNlbFargateService.Initializer"></a>

```typescript
import { DualNlbFargateService } from 'hiii-aws-cdk-utils'

new DualNlbFargateService(scope: Construct, id: string, props: DualNlbFargateServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.Initializer.parameter.props">props</a></code> | <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps">DualNlbFargateServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="hiii-aws-cdk-utils.DualNlbFargateService.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="hiii-aws-cdk-utils.DualNlbFargateService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="hiii-aws-cdk-utils.DualNlbFargateService.Initializer.parameter.props"></a>

- *Type:* <a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps">DualNlbFargateServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="hiii-aws-cdk-utils.DualNlbFargateService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="hiii-aws-cdk-utils.DualNlbFargateService.isConstruct"></a>

```typescript
import { DualNlbFargateService } from 'hiii-aws-cdk-utils'

DualNlbFargateService.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="hiii-aws-cdk-utils.DualNlbFargateService.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.property.service">service</a></code> | <code>@aws-cdk/aws-ecs.FargateService[]</code> | The service(s) created from the task(s). |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | The VPC. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.property.externalNlb">externalNlb</a></code> | <code>@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer</code> | The external Nlb. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateService.property.internalNlb">internalNlb</a></code> | <code>@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer</code> | The internal Nlb. |

---

##### `node`<sup>Required</sup> <a name="node" id="hiii-aws-cdk-utils.DualNlbFargateService.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `service`<sup>Required</sup> <a name="service" id="hiii-aws-cdk-utils.DualNlbFargateService.property.service"></a>

```typescript
public readonly service: FargateService[];
```

- *Type:* @aws-cdk/aws-ecs.FargateService[]

The service(s) created from the task(s).

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="hiii-aws-cdk-utils.DualNlbFargateService.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

The VPC.

---

##### `externalNlb`<sup>Optional</sup> <a name="externalNlb" id="hiii-aws-cdk-utils.DualNlbFargateService.property.externalNlb"></a>

```typescript
public readonly externalNlb: NetworkLoadBalancer;
```

- *Type:* @aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer

The external Nlb.

---

##### `internalNlb`<sup>Optional</sup> <a name="internalNlb" id="hiii-aws-cdk-utils.DualNlbFargateService.property.internalNlb"></a>

```typescript
public readonly internalNlb: NetworkLoadBalancer;
```

- *Type:* @aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer

The internal Nlb.

---


### LaravelService <a name="LaravelService" id="hiii-aws-cdk-utils.LaravelService"></a>

#### Initializers <a name="Initializers" id="hiii-aws-cdk-utils.LaravelService.Initializer"></a>

```typescript
import { LaravelService } from 'hiii-aws-cdk-utils'

new LaravelService(scope: Construct, id: string, props: LaravelProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.LaravelService.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.LaravelService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.LaravelService.Initializer.parameter.props">props</a></code> | <code><a href="#hiii-aws-cdk-utils.LaravelProps">LaravelProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="hiii-aws-cdk-utils.LaravelService.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="hiii-aws-cdk-utils.LaravelService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="hiii-aws-cdk-utils.LaravelService.Initializer.parameter.props"></a>

- *Type:* <a href="#hiii-aws-cdk-utils.LaravelProps">LaravelProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.LaravelService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="hiii-aws-cdk-utils.LaravelService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.LaravelService.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="hiii-aws-cdk-utils.LaravelService.isConstruct"></a>

```typescript
import { LaravelService } from 'hiii-aws-cdk-utils'

LaravelService.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="hiii-aws-cdk-utils.LaravelService.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.LaravelService.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#hiii-aws-cdk-utils.LaravelService.property.svc">svc</a></code> | <code><a href="#hiii-aws-cdk-utils.DualAlbFargateService">DualAlbFargateService</a></code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.LaravelService.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="hiii-aws-cdk-utils.LaravelService.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `svc`<sup>Required</sup> <a name="svc" id="hiii-aws-cdk-utils.LaravelService.property.svc"></a>

```typescript
public readonly svc: DualAlbFargateService;
```

- *Type:* <a href="#hiii-aws-cdk-utils.DualAlbFargateService">DualAlbFargateService</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="hiii-aws-cdk-utils.LaravelService.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

---


### RdsService <a name="RdsService" id="hiii-aws-cdk-utils.RdsService"></a>

#### Initializers <a name="Initializers" id="hiii-aws-cdk-utils.RdsService.Initializer"></a>

```typescript
import { RdsService } from 'hiii-aws-cdk-utils'

new RdsService(scope: Construct, id: string, props: RdsServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.RdsService.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsService.Initializer.parameter.props">props</a></code> | <code><a href="#hiii-aws-cdk-utils.RdsServiceProps">RdsServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="hiii-aws-cdk-utils.RdsService.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="hiii-aws-cdk-utils.RdsService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="hiii-aws-cdk-utils.RdsService.Initializer.parameter.props"></a>

- *Type:* <a href="#hiii-aws-cdk-utils.RdsServiceProps">RdsServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.RdsService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="hiii-aws-cdk-utils.RdsService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.RdsService.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="hiii-aws-cdk-utils.RdsService.isConstruct"></a>

```typescript
import { RdsService } from 'hiii-aws-cdk-utils'

RdsService.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="hiii-aws-cdk-utils.RdsService.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.RdsService.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#hiii-aws-cdk-utils.RdsService.property.clusterEndpointHostname">clusterEndpointHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsService.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsService.property.connections">connections</a></code> | <code>@aws-cdk/aws-ec2.Connections</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsService.property.secret">secret</a></code> | <code>@aws-cdk/aws-secretsmanager.ISecret</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="hiii-aws-cdk-utils.RdsService.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `clusterEndpointHostname`<sup>Required</sup> <a name="clusterEndpointHostname" id="hiii-aws-cdk-utils.RdsService.property.clusterEndpointHostname"></a>

```typescript
public readonly clusterEndpointHostname: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="hiii-aws-cdk-utils.RdsService.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `connections`<sup>Required</sup> <a name="connections" id="hiii-aws-cdk-utils.RdsService.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* @aws-cdk/aws-ec2.Connections

---

##### `secret`<sup>Required</sup> <a name="secret" id="hiii-aws-cdk-utils.RdsService.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* @aws-cdk/aws-secretsmanager.ISecret

---


### S3Service <a name="S3Service" id="hiii-aws-cdk-utils.S3Service"></a>

#### Initializers <a name="Initializers" id="hiii-aws-cdk-utils.S3Service.Initializer"></a>

```typescript
import { S3Service } from 'hiii-aws-cdk-utils'

new S3Service(scope: Construct, id: string, props: S3ServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.S3Service.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.S3Service.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.S3Service.Initializer.parameter.props">props</a></code> | <code><a href="#hiii-aws-cdk-utils.S3ServiceProps">S3ServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="hiii-aws-cdk-utils.S3Service.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="hiii-aws-cdk-utils.S3Service.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="hiii-aws-cdk-utils.S3Service.Initializer.parameter.props"></a>

- *Type:* <a href="#hiii-aws-cdk-utils.S3ServiceProps">S3ServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.S3Service.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="hiii-aws-cdk-utils.S3Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hiii-aws-cdk-utils.S3Service.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="hiii-aws-cdk-utils.S3Service.isConstruct"></a>

```typescript
import { S3Service } from 'hiii-aws-cdk-utils'

S3Service.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="hiii-aws-cdk-utils.S3Service.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.S3Service.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#hiii-aws-cdk-utils.S3Service.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.S3Service.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.S3Service.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.S3Service.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="hiii-aws-cdk-utils.S3Service.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="hiii-aws-cdk-utils.S3Service.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="hiii-aws-cdk-utils.S3Service.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="hiii-aws-cdk-utils.S3Service.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="hiii-aws-cdk-utils.S3Service.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### BaseFargateServiceProps <a name="BaseFargateServiceProps" id="hiii-aws-cdk-utils.BaseFargateServiceProps"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.BaseFargateServiceProps.Initializer"></a>

```typescript
import { BaseFargateServiceProps } from 'hiii-aws-cdk-utils'

const baseFargateServiceProps: BaseFargateServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.tasks">tasks</a></code> | <code><a href="#hiii-aws-cdk-utils.FargateTaskProps">FargateTaskProps</a>[]</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.circuitBreaker">circuitBreaker</a></code> | <code>boolean</code> | Enable the ECS service circuit breaker. |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-ecs.ICluster</code> | Use existing ECS Cluster. |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.clusterProps">clusterProps</a></code> | <code>@aws-cdk/aws-ecs.ClusterProps</code> | The properties used to define an ECS cluster. |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether to enable ECS Exec support. |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.fargateServiceSecruityGroups">fargateServiceSecruityGroups</a></code> | <code>@aws-cdk/aws-ec2.ISecurityGroup[]</code> | The security groups to associate with the fargate service. |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.route53Ops">route53Ops</a></code> | <code><a href="#hiii-aws-cdk-utils.Route53Options">Route53Options</a></code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.spot">spot</a></code> | <code>boolean</code> | create a FARGATE_SPOT only cluster. |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.spotTerminationHandler">spotTerminationHandler</a></code> | <code>boolean</code> | Enable the fargate spot termination handler. |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.BaseFargateServiceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>@aws-cdk/aws-ec2.SubnetSelection</code> | The subnets to associate with the service. |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.tasks"></a>

```typescript
public readonly tasks: FargateTaskProps[];
```

- *Type:* <a href="#hiii-aws-cdk-utils.FargateTaskProps">FargateTaskProps</a>[]

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the ECS service circuit breaker.

> [- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/](- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/)

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* @aws-cdk/aws-ecs.ICluster
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `clusterProps`<sup>Optional</sup> <a name="clusterProps" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.clusterProps"></a>

```typescript
public readonly clusterProps: ClusterProps;
```

- *Type:* @aws-cdk/aws-ecs.ClusterProps
- *Default:* Create vpc and enable Fargate Capacity Providers.

The properties used to define an ECS cluster.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable ECS Exec support.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html)

---

##### `fargateServiceSecruityGroups`<sup>Optional</sup> <a name="fargateServiceSecruityGroups" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.fargateServiceSecruityGroups"></a>

```typescript
public readonly fargateServiceSecruityGroups: ISecurityGroup[];
```

- *Type:* @aws-cdk/aws-ec2.ISecurityGroup[]
- *Default:* A new security group is created.

The security groups to associate with the fargate service.

---

##### `route53Ops`<sup>Optional</sup> <a name="route53Ops" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.route53Ops"></a>

```typescript
public readonly route53Ops: Route53Options;
```

- *Type:* <a href="#hiii-aws-cdk-utils.Route53Options">Route53Options</a>

---

##### `spot`<sup>Optional</sup> <a name="spot" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

create a FARGATE_SPOT only cluster.

---

##### `spotTerminationHandler`<sup>Optional</sup> <a name="spotTerminationHandler" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.spotTerminationHandler"></a>

```typescript
public readonly spotTerminationHandler: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the fargate spot termination handler.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination)

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="hiii-aws-cdk-utils.BaseFargateServiceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* @aws-cdk/aws-ec2.SubnetSelection
- *Default:* { subnetType: ec2.SubnetType.PRIVATE, }

The subnets to associate with the service.

---

### CNameProps <a name="CNameProps" id="hiii-aws-cdk-utils.CNameProps"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.CNameProps.Initializer"></a>

```typescript
import { CNameProps } from 'hiii-aws-cdk-utils'

const cNameProps: CNameProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.CNameProps.property.elbv2">elbv2</a></code> | <code>@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.CNameProps.property.hostZoneId">hostZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.CNameProps.property.recordName">recordName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.CNameProps.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `elbv2`<sup>Required</sup> <a name="elbv2" id="hiii-aws-cdk-utils.CNameProps.property.elbv2"></a>

```typescript
public readonly elbv2: ApplicationLoadBalancer;
```

- *Type:* @aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer

---

##### `hostZoneId`<sup>Required</sup> <a name="hostZoneId" id="hiii-aws-cdk-utils.CNameProps.property.hostZoneId"></a>

```typescript
public readonly hostZoneId: string;
```

- *Type:* string

---

##### `recordName`<sup>Required</sup> <a name="recordName" id="hiii-aws-cdk-utils.CNameProps.property.recordName"></a>

```typescript
public readonly recordName: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="hiii-aws-cdk-utils.CNameProps.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

### DatabaseCofig <a name="DatabaseCofig" id="hiii-aws-cdk-utils.DatabaseCofig"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.DatabaseCofig.Initializer"></a>

```typescript
import { DatabaseCofig } from 'hiii-aws-cdk-utils'

const databaseCofig: DatabaseCofig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DatabaseCofig.property.connections">connections</a></code> | <code>@aws-cdk/aws-ec2.Connections</code> | The database connnections. |
| <code><a href="#hiii-aws-cdk-utils.DatabaseCofig.property.endpoint">endpoint</a></code> | <code>string</code> | The endpoint address for the database. |
| <code><a href="#hiii-aws-cdk-utils.DatabaseCofig.property.identifier">identifier</a></code> | <code>string</code> | The databasae identifier. |
| <code><a href="#hiii-aws-cdk-utils.DatabaseCofig.property.secret">secret</a></code> | <code>@aws-cdk/aws-secretsmanager.ISecret</code> | The database secret. |

---

##### `connections`<sup>Required</sup> <a name="connections" id="hiii-aws-cdk-utils.DatabaseCofig.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* @aws-cdk/aws-ec2.Connections

The database connnections.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="hiii-aws-cdk-utils.DatabaseCofig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The endpoint address for the database.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="hiii-aws-cdk-utils.DatabaseCofig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The databasae identifier.

---

##### `secret`<sup>Required</sup> <a name="secret" id="hiii-aws-cdk-utils.DatabaseCofig.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* @aws-cdk/aws-secretsmanager.ISecret

The database secret.

---

### DualAlbFargateServiceProps <a name="DualAlbFargateServiceProps" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.Initializer"></a>

```typescript
import { DualAlbFargateServiceProps } from 'hiii-aws-cdk-utils'

const dualAlbFargateServiceProps: DualAlbFargateServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.tasks">tasks</a></code> | <code><a href="#hiii-aws-cdk-utils.FargateTaskProps">FargateTaskProps</a>[]</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.circuitBreaker">circuitBreaker</a></code> | <code>boolean</code> | Enable the ECS service circuit breaker. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-ecs.ICluster</code> | Use existing ECS Cluster. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.clusterProps">clusterProps</a></code> | <code>@aws-cdk/aws-ecs.ClusterProps</code> | The properties used to define an ECS cluster. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether to enable ECS Exec support. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.fargateServiceSecruityGroups">fargateServiceSecruityGroups</a></code> | <code>@aws-cdk/aws-ec2.ISecurityGroup[]</code> | The security groups to associate with the fargate service. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.route53Ops">route53Ops</a></code> | <code><a href="#hiii-aws-cdk-utils.Route53Options">Route53Options</a></code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.spot">spot</a></code> | <code>boolean</code> | create a FARGATE_SPOT only cluster. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.spotTerminationHandler">spotTerminationHandler</a></code> | <code>boolean</code> | Enable the fargate spot termination handler. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>@aws-cdk/aws-ec2.SubnetSelection</code> | The subnets to associate with the service. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.albSecruityGroup">albSecruityGroup</a></code> | <code>@aws-cdk/aws-ec2.ISecurityGroup</code> | Set Up The internal ALB Name. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.externalAlbIdleTimeout">externalAlbIdleTimeout</a></code> | <code>@aws-cdk/core.Duration</code> | The external load balancer idle timeout, in seconds. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.externalAlbName">externalAlbName</a></code> | <code>string</code> | Set Up The external ALB Name. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.internalAlbIdleTimeout">internalAlbIdleTimeout</a></code> | <code>@aws-cdk/core.Duration</code> | The internal load balancer idle timeout, in seconds. |
| <code><a href="#hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.internalAlbName">internalAlbName</a></code> | <code>string</code> | Set Up The internal ALB Name. |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.tasks"></a>

```typescript
public readonly tasks: FargateTaskProps[];
```

- *Type:* <a href="#hiii-aws-cdk-utils.FargateTaskProps">FargateTaskProps</a>[]

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the ECS service circuit breaker.

> [- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/](- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/)

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* @aws-cdk/aws-ecs.ICluster
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `clusterProps`<sup>Optional</sup> <a name="clusterProps" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.clusterProps"></a>

```typescript
public readonly clusterProps: ClusterProps;
```

- *Type:* @aws-cdk/aws-ecs.ClusterProps
- *Default:* Create vpc and enable Fargate Capacity Providers.

The properties used to define an ECS cluster.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable ECS Exec support.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html)

---

##### `fargateServiceSecruityGroups`<sup>Optional</sup> <a name="fargateServiceSecruityGroups" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.fargateServiceSecruityGroups"></a>

```typescript
public readonly fargateServiceSecruityGroups: ISecurityGroup[];
```

- *Type:* @aws-cdk/aws-ec2.ISecurityGroup[]
- *Default:* A new security group is created.

The security groups to associate with the fargate service.

---

##### `route53Ops`<sup>Optional</sup> <a name="route53Ops" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.route53Ops"></a>

```typescript
public readonly route53Ops: Route53Options;
```

- *Type:* <a href="#hiii-aws-cdk-utils.Route53Options">Route53Options</a>

---

##### `spot`<sup>Optional</sup> <a name="spot" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

create a FARGATE_SPOT only cluster.

---

##### `spotTerminationHandler`<sup>Optional</sup> <a name="spotTerminationHandler" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.spotTerminationHandler"></a>

```typescript
public readonly spotTerminationHandler: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the fargate spot termination handler.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination)

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* @aws-cdk/aws-ec2.SubnetSelection
- *Default:* { subnetType: ec2.SubnetType.PRIVATE, }

The subnets to associate with the service.

---

##### `albSecruityGroup`<sup>Optional</sup> <a name="albSecruityGroup" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.albSecruityGroup"></a>

```typescript
public readonly albSecruityGroup: ISecurityGroup;
```

- *Type:* @aws-cdk/aws-ec2.ISecurityGroup

Set Up The internal ALB Name.

---

##### `externalAlbIdleTimeout`<sup>Optional</sup> <a name="externalAlbIdleTimeout" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.externalAlbIdleTimeout"></a>

```typescript
public readonly externalAlbIdleTimeout: Duration;
```

- *Type:* @aws-cdk/core.Duration
- *Default:* 60.

The external load balancer idle timeout, in seconds.

---

##### `externalAlbName`<sup>Optional</sup> <a name="externalAlbName" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.externalAlbName"></a>

```typescript
public readonly externalAlbName: string;
```

- *Type:* string

Set Up The external ALB Name.

---

##### `internalAlbIdleTimeout`<sup>Optional</sup> <a name="internalAlbIdleTimeout" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.internalAlbIdleTimeout"></a>

```typescript
public readonly internalAlbIdleTimeout: Duration;
```

- *Type:* @aws-cdk/core.Duration
- *Default:* 60.

The internal load balancer idle timeout, in seconds.

---

##### `internalAlbName`<sup>Optional</sup> <a name="internalAlbName" id="hiii-aws-cdk-utils.DualAlbFargateServiceProps.property.internalAlbName"></a>

```typescript
public readonly internalAlbName: string;
```

- *Type:* string

Set Up The internal ALB Name.

---

### DualNlbFargateServiceProps <a name="DualNlbFargateServiceProps" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.Initializer"></a>

```typescript
import { DualNlbFargateServiceProps } from 'hiii-aws-cdk-utils'

const dualNlbFargateServiceProps: DualNlbFargateServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.tasks">tasks</a></code> | <code><a href="#hiii-aws-cdk-utils.FargateTaskProps">FargateTaskProps</a>[]</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.circuitBreaker">circuitBreaker</a></code> | <code>boolean</code> | Enable the ECS service circuit breaker. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-ecs.ICluster</code> | Use existing ECS Cluster. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.clusterProps">clusterProps</a></code> | <code>@aws-cdk/aws-ecs.ClusterProps</code> | The properties used to define an ECS cluster. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether to enable ECS Exec support. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.fargateServiceSecruityGroups">fargateServiceSecruityGroups</a></code> | <code>@aws-cdk/aws-ec2.ISecurityGroup[]</code> | The security groups to associate with the fargate service. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.route53Ops">route53Ops</a></code> | <code><a href="#hiii-aws-cdk-utils.Route53Options">Route53Options</a></code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.spot">spot</a></code> | <code>boolean</code> | create a FARGATE_SPOT only cluster. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.spotTerminationHandler">spotTerminationHandler</a></code> | <code>boolean</code> | Enable the fargate spot termination handler. |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>@aws-cdk/aws-ec2.SubnetSelection</code> | The subnets to associate with the service. |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.tasks"></a>

```typescript
public readonly tasks: FargateTaskProps[];
```

- *Type:* <a href="#hiii-aws-cdk-utils.FargateTaskProps">FargateTaskProps</a>[]

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the ECS service circuit breaker.

> [- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/](- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/)

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* @aws-cdk/aws-ecs.ICluster
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `clusterProps`<sup>Optional</sup> <a name="clusterProps" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.clusterProps"></a>

```typescript
public readonly clusterProps: ClusterProps;
```

- *Type:* @aws-cdk/aws-ecs.ClusterProps
- *Default:* Create vpc and enable Fargate Capacity Providers.

The properties used to define an ECS cluster.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable ECS Exec support.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html)

---

##### `fargateServiceSecruityGroups`<sup>Optional</sup> <a name="fargateServiceSecruityGroups" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.fargateServiceSecruityGroups"></a>

```typescript
public readonly fargateServiceSecruityGroups: ISecurityGroup[];
```

- *Type:* @aws-cdk/aws-ec2.ISecurityGroup[]
- *Default:* A new security group is created.

The security groups to associate with the fargate service.

---

##### `route53Ops`<sup>Optional</sup> <a name="route53Ops" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.route53Ops"></a>

```typescript
public readonly route53Ops: Route53Options;
```

- *Type:* <a href="#hiii-aws-cdk-utils.Route53Options">Route53Options</a>

---

##### `spot`<sup>Optional</sup> <a name="spot" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

create a FARGATE_SPOT only cluster.

---

##### `spotTerminationHandler`<sup>Optional</sup> <a name="spotTerminationHandler" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.spotTerminationHandler"></a>

```typescript
public readonly spotTerminationHandler: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the fargate spot termination handler.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination)

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="hiii-aws-cdk-utils.DualNlbFargateServiceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* @aws-cdk/aws-ec2.SubnetSelection
- *Default:* { subnetType: ec2.SubnetType.PRIVATE, }

The subnets to associate with the service.

---

### FargateTaskProps <a name="FargateTaskProps" id="hiii-aws-cdk-utils.FargateTaskProps"></a>

Task properties for the Fargate.

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.FargateTaskProps.Initializer"></a>

```typescript
import { FargateTaskProps } from 'hiii-aws-cdk-utils'

const fargateTaskProps: FargateTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.forceHttps">forceHttps</a></code> | <code>boolean</code> | To Force Https. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.task">task</a></code> | <code>@aws-cdk/aws-ecs.FargateTaskDefinition</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>@aws-cdk/aws-ecs.CapacityProviderStrategy[]</code> | Customized capacity provider strategy. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.deployType">deployType</a></code> | <code>@aws-cdk/aws-ecs.DeploymentControllerType</code> | Set Deployment Type. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.desiredCount">desiredCount</a></code> | <code>number</code> | desired number of tasks for the service. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.external">external</a></code> | <code><a href="#hiii-aws-cdk-utils.LoadBalancerAccessibility">LoadBalancerAccessibility</a></code> | The external ELB listener. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.healthCheck">healthCheck</a></code> | <code>@aws-cdk/aws-elasticloadbalancingv2.HealthCheck</code> | health check from elbv2 target group. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>@aws-cdk/core.Duration</code> | The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.internal">internal</a></code> | <code><a href="#hiii-aws-cdk-utils.LoadBalancerAccessibility">LoadBalancerAccessibility</a></code> | The internal ELB listener. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.maxHealthyPercent">maxHealthyPercent</a></code> | <code>number</code> | The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.minHealthyPercent">minHealthyPercent</a></code> | <code>number</code> | The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.protocol">protocol</a></code> | <code>@aws-cdk/aws-elasticloadbalancingv2.Protocol</code> | The target group protocol for NLB. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.protocolVersion">protocolVersion</a></code> | <code>@aws-cdk/aws-elasticloadbalancingv2.ApplicationProtocolVersion</code> | The protocol version to use. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#hiii-aws-cdk-utils.ServiceScalingPolicy">ServiceScalingPolicy</a></code> | service autoscaling policy. |
| <code><a href="#hiii-aws-cdk-utils.FargateTaskProps.property.serviceName">serviceName</a></code> | <code>string</code> | The serviceName. |

---

##### `forceHttps`<sup>Required</sup> <a name="forceHttps" id="hiii-aws-cdk-utils.FargateTaskProps.property.forceHttps"></a>

```typescript
public readonly forceHttps: boolean;
```

- *Type:* boolean

To Force Https.

---

##### `task`<sup>Required</sup> <a name="task" id="hiii-aws-cdk-utils.FargateTaskProps.property.task"></a>

```typescript
public readonly task: FargateTaskDefinition;
```

- *Type:* @aws-cdk/aws-ecs.FargateTaskDefinition

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="hiii-aws-cdk-utils.FargateTaskProps.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: CapacityProviderStrategy[];
```

- *Type:* @aws-cdk/aws-ecs.CapacityProviderStrategy[]

Customized capacity provider strategy.

---

##### `deployType`<sup>Optional</sup> <a name="deployType" id="hiii-aws-cdk-utils.FargateTaskProps.property.deployType"></a>

```typescript
public readonly deployType: DeploymentControllerType;
```

- *Type:* @aws-cdk/aws-ecs.DeploymentControllerType
- *Default:* ecs.DeploymentControllerType.ECS

Set Deployment Type.

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="hiii-aws-cdk-utils.FargateTaskProps.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number
- *Default:* 1

desired number of tasks for the service.

---

##### `external`<sup>Optional</sup> <a name="external" id="hiii-aws-cdk-utils.FargateTaskProps.property.external"></a>

```typescript
public readonly external: LoadBalancerAccessibility;
```

- *Type:* <a href="#hiii-aws-cdk-utils.LoadBalancerAccessibility">LoadBalancerAccessibility</a>
- *Default:* no external listener

The external ELB listener.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="hiii-aws-cdk-utils.FargateTaskProps.property.healthCheck"></a>

```typescript
public readonly healthCheck: HealthCheck;
```

- *Type:* @aws-cdk/aws-elasticloadbalancingv2.HealthCheck

health check from elbv2 target group.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="hiii-aws-cdk-utils.FargateTaskProps.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: Duration;
```

- *Type:* @aws-cdk/core.Duration
- *Default:* cdk.Duration.seconds(60),

The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="hiii-aws-cdk-utils.FargateTaskProps.property.internal"></a>

```typescript
public readonly internal: LoadBalancerAccessibility;
```

- *Type:* <a href="#hiii-aws-cdk-utils.LoadBalancerAccessibility">LoadBalancerAccessibility</a>
- *Default:* no internal listener

The internal ELB listener.

---

##### `maxHealthyPercent`<sup>Optional</sup> <a name="maxHealthyPercent" id="hiii-aws-cdk-utils.FargateTaskProps.property.maxHealthyPercent"></a>

```typescript
public readonly maxHealthyPercent: number;
```

- *Type:* number
- *Default:* 200

The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment.

---

##### `minHealthyPercent`<sup>Optional</sup> <a name="minHealthyPercent" id="hiii-aws-cdk-utils.FargateTaskProps.property.minHealthyPercent"></a>

```typescript
public readonly minHealthyPercent: number;
```

- *Type:* number
- *Default:* 50

The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="hiii-aws-cdk-utils.FargateTaskProps.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* @aws-cdk/aws-elasticloadbalancingv2.Protocol
- *Default:* TCP

The target group protocol for NLB.

For ALB, this option will be ignored and always set to HTTP.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="hiii-aws-cdk-utils.FargateTaskProps.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: ApplicationProtocolVersion;
```

- *Type:* @aws-cdk/aws-elasticloadbalancingv2.ApplicationProtocolVersion

The protocol version to use.

---

##### `scalingPolicy`<sup>Optional</sup> <a name="scalingPolicy" id="hiii-aws-cdk-utils.FargateTaskProps.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: ServiceScalingPolicy;
```

- *Type:* <a href="#hiii-aws-cdk-utils.ServiceScalingPolicy">ServiceScalingPolicy</a>
- *Default:* { maxCapacity: 10, targetCpuUtilization: 50, requestsPerTarget: 1000 }

service autoscaling policy.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="hiii-aws-cdk-utils.FargateTaskProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string
- *Default:* auto-generated

The serviceName.

---

### LaravelProps <a name="LaravelProps" id="hiii-aws-cdk-utils.LaravelProps"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.LaravelProps.Initializer"></a>

```typescript
import { LaravelProps } from 'hiii-aws-cdk-utils'

const laravelProps: LaravelProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.code">code</a></code> | <code>string</code> | The local path to the Laravel code base. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.fromRegistry">fromRegistry</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.albSecruityGroup">albSecruityGroup</a></code> | <code>@aws-cdk/aws-ec2.ISecurityGroup</code> | The security groups to associate with the Load Balancer. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.cert">cert</a></code> | <code>@aws-cdk/aws-certificatemanager.ICertificate[]</code> | This is the FargateTaskProps below. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-ecs.ICluster</code> | Use existing ECS Cluster. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.containerPort">containerPort</a></code> | <code>number</code> | The Laravel container port. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.db">db</a></code> | <code><a href="#hiii-aws-cdk-utils.RdsService">RdsService</a></code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.deployType">deployType</a></code> | <code>@aws-cdk/aws-ecs.DeploymentControllerType</code> | Set Deployment Type. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.efsFileSystem">efsFileSystem</a></code> | <code>@aws-cdk/aws-efs.FileSystemProps</code> | Options to create the EFS FileSystem. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | enable ECS Exec. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.externalAlbIdleTimeout">externalAlbIdleTimeout</a></code> | <code>@aws-cdk/core.Duration</code> | The external load balancer idle timeout, in seconds. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.externalAlbName">externalAlbName</a></code> | <code>string</code> | Set Up The external ALB Name. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.fargateServiceSecruityGroups">fargateServiceSecruityGroups</a></code> | <code>@aws-cdk/aws-ec2.ISecurityGroup[]</code> | The security groups to associate with the fargate service. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.fargateTaskDefinitionProps">fargateTaskDefinitionProps</a></code> | <code>@aws-cdk/aws-ecs.FargateTaskDefinitionProps</code> | https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.healthCheckCode">healthCheckCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.imageVersion">imageVersion</a></code> | <code>string</code> | EcrRepository Version. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.internalAlbIdleTimeout">internalAlbIdleTimeout</a></code> | <code>@aws-cdk/core.Duration</code> | The internal load balancer idle timeout, in seconds. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.internalAlbName">internalAlbName</a></code> | <code>string</code> | Set Up The internal ALB Name. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.logGroupName">logGroupName</a></code> | <code>string</code> | Set Log Group Name. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.secretEnvironment">secretEnvironment</a></code> | <code>{[ key: string ]: @aws-cdk/aws-ecs.Secret}</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.spot">spot</a></code> | <code>boolean</code> | enable fargate spot. |
| <code><a href="#hiii-aws-cdk-utils.LaravelProps.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | *No description.* |

---

##### `code`<sup>Required</sup> <a name="code" id="hiii-aws-cdk-utils.LaravelProps.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

The local path to the Laravel code base.

---

##### `fromRegistry`<sup>Required</sup> <a name="fromRegistry" id="hiii-aws-cdk-utils.LaravelProps.property.fromRegistry"></a>

```typescript
public readonly fromRegistry: boolean;
```

- *Type:* boolean

---

##### `albSecruityGroup`<sup>Optional</sup> <a name="albSecruityGroup" id="hiii-aws-cdk-utils.LaravelProps.property.albSecruityGroup"></a>

```typescript
public readonly albSecruityGroup: ISecurityGroup;
```

- *Type:* @aws-cdk/aws-ec2.ISecurityGroup
- *Default:* A new security group is created.

The security groups to associate with the Load Balancer.

---

##### `cert`<sup>Optional</sup> <a name="cert" id="hiii-aws-cdk-utils.LaravelProps.property.cert"></a>

```typescript
public readonly cert: ICertificate[];
```

- *Type:* @aws-cdk/aws-certificatemanager.ICertificate[]

This is the FargateTaskProps below.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="hiii-aws-cdk-utils.LaravelProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* @aws-cdk/aws-ecs.ICluster
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="hiii-aws-cdk-utils.LaravelProps.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number
- *Default:* 80

The Laravel container port.

---

##### `db`<sup>Optional</sup> <a name="db" id="hiii-aws-cdk-utils.LaravelProps.property.db"></a>

```typescript
public readonly db: RdsService;
```

- *Type:* <a href="#hiii-aws-cdk-utils.RdsService">RdsService</a>

---

##### `deployType`<sup>Optional</sup> <a name="deployType" id="hiii-aws-cdk-utils.LaravelProps.property.deployType"></a>

```typescript
public readonly deployType: DeploymentControllerType;
```

- *Type:* @aws-cdk/aws-ecs.DeploymentControllerType
- *Default:* ecs.DeploymentControllerType.ECS

Set Deployment Type.

---

##### `efsFileSystem`<sup>Optional</sup> <a name="efsFileSystem" id="hiii-aws-cdk-utils.LaravelProps.property.efsFileSystem"></a>

```typescript
public readonly efsFileSystem: FileSystemProps;
```

- *Type:* @aws-cdk/aws-efs.FileSystemProps

Options to create the EFS FileSystem.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="hiii-aws-cdk-utils.LaravelProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean

enable ECS Exec.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="hiii-aws-cdk-utils.LaravelProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalAlbIdleTimeout`<sup>Optional</sup> <a name="externalAlbIdleTimeout" id="hiii-aws-cdk-utils.LaravelProps.property.externalAlbIdleTimeout"></a>

```typescript
public readonly externalAlbIdleTimeout: Duration;
```

- *Type:* @aws-cdk/core.Duration
- *Default:* 60.

The external load balancer idle timeout, in seconds.

---

##### `externalAlbName`<sup>Optional</sup> <a name="externalAlbName" id="hiii-aws-cdk-utils.LaravelProps.property.externalAlbName"></a>

```typescript
public readonly externalAlbName: string;
```

- *Type:* string

Set Up The external ALB Name.

---

##### `fargateServiceSecruityGroups`<sup>Optional</sup> <a name="fargateServiceSecruityGroups" id="hiii-aws-cdk-utils.LaravelProps.property.fargateServiceSecruityGroups"></a>

```typescript
public readonly fargateServiceSecruityGroups: ISecurityGroup[];
```

- *Type:* @aws-cdk/aws-ec2.ISecurityGroup[]
- *Default:* A new security group is created.

The security groups to associate with the fargate service.

---

##### `fargateTaskDefinitionProps`<sup>Optional</sup> <a name="fargateTaskDefinitionProps" id="hiii-aws-cdk-utils.LaravelProps.property.fargateTaskDefinitionProps"></a>

```typescript
public readonly fargateTaskDefinitionProps: FargateTaskDefinitionProps;
```

- *Type:* @aws-cdk/aws-ecs.FargateTaskDefinitionProps

https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html.

---

##### `healthCheckCode`<sup>Optional</sup> <a name="healthCheckCode" id="hiii-aws-cdk-utils.LaravelProps.property.healthCheckCode"></a>

```typescript
public readonly healthCheckCode: string;
```

- *Type:* string

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="hiii-aws-cdk-utils.LaravelProps.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="hiii-aws-cdk-utils.LaravelProps.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string
- *Default:* latest

EcrRepository Version.

---

##### `internalAlbIdleTimeout`<sup>Optional</sup> <a name="internalAlbIdleTimeout" id="hiii-aws-cdk-utils.LaravelProps.property.internalAlbIdleTimeout"></a>

```typescript
public readonly internalAlbIdleTimeout: Duration;
```

- *Type:* @aws-cdk/core.Duration
- *Default:* 60.

The internal load balancer idle timeout, in seconds.

---

##### `internalAlbName`<sup>Optional</sup> <a name="internalAlbName" id="hiii-aws-cdk-utils.LaravelProps.property.internalAlbName"></a>

```typescript
public readonly internalAlbName: string;
```

- *Type:* string

Set Up The internal ALB Name.

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="hiii-aws-cdk-utils.LaravelProps.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string
- *Default:* null

Set Log Group Name.

---

##### `secretEnvironment`<sup>Optional</sup> <a name="secretEnvironment" id="hiii-aws-cdk-utils.LaravelProps.property.secretEnvironment"></a>

```typescript
public readonly secretEnvironment: {[ key: string ]: Secret};
```

- *Type:* {[ key: string ]: @aws-cdk/aws-ecs.Secret}

---

##### `spot`<sup>Optional</sup> <a name="spot" id="hiii-aws-cdk-utils.LaravelProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean

enable fargate spot.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="hiii-aws-cdk-utils.LaravelProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

---

### LoadBalancerAccessibility <a name="LoadBalancerAccessibility" id="hiii-aws-cdk-utils.LoadBalancerAccessibility"></a>

The load balancer accessibility.

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.LoadBalancerAccessibility.Initializer"></a>

```typescript
import { LoadBalancerAccessibility } from 'hiii-aws-cdk-utils'

const loadBalancerAccessibility: LoadBalancerAccessibility = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.LoadBalancerAccessibility.property.port">port</a></code> | <code>number</code> | The port of the listener. |
| <code><a href="#hiii-aws-cdk-utils.LoadBalancerAccessibility.property.certificate">certificate</a></code> | <code>@aws-cdk/aws-certificatemanager.ICertificate[]</code> | The ACM certificate for the HTTPS listener. |
| <code><a href="#hiii-aws-cdk-utils.LoadBalancerAccessibility.property.forwardConditions">forwardConditions</a></code> | <code>@aws-cdk/aws-elasticloadbalancingv2.ListenerCondition[]</code> | Listener forward conditions. |

---

##### `port`<sup>Required</sup> <a name="port" id="hiii-aws-cdk-utils.LoadBalancerAccessibility.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port of the listener.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="hiii-aws-cdk-utils.LoadBalancerAccessibility.property.certificate"></a>

```typescript
public readonly certificate: ICertificate[];
```

- *Type:* @aws-cdk/aws-certificatemanager.ICertificate[]
- *Default:* no certificate(HTTP only)

The ACM certificate for the HTTPS listener.

---

##### `forwardConditions`<sup>Optional</sup> <a name="forwardConditions" id="hiii-aws-cdk-utils.LoadBalancerAccessibility.property.forwardConditions"></a>

```typescript
public readonly forwardConditions: ListenerCondition[];
```

- *Type:* @aws-cdk/aws-elasticloadbalancingv2.ListenerCondition[]
- *Default:* no forward conditions.

Listener forward conditions.

---

### RdsServiceProps <a name="RdsServiceProps" id="hiii-aws-cdk-utils.RdsServiceProps"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.RdsServiceProps.Initializer"></a>

```typescript
import { RdsServiceProps } from 'hiii-aws-cdk-utils'

const rdsServiceProps: RdsServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.RdsServiceProps.property.cluster">cluster</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsServiceProps.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsServiceProps.property.backupRetention">backupRetention</a></code> | <code>@aws-cdk/core.Duration</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsServiceProps.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsServiceProps.property.securityGroup">securityGroup</a></code> | <code>@aws-cdk/aws-ec2.ISecurityGroup[]</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.RdsServiceProps.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="hiii-aws-cdk-utils.RdsServiceProps.property.cluster"></a>

```typescript
public readonly cluster: boolean;
```

- *Type:* boolean

---

##### `username`<sup>Required</sup> <a name="username" id="hiii-aws-cdk-utils.RdsServiceProps.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="hiii-aws-cdk-utils.RdsServiceProps.property.backupRetention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* @aws-cdk/core.Duration

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="hiii-aws-cdk-utils.RdsServiceProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="hiii-aws-cdk-utils.RdsServiceProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup[];
```

- *Type:* @aws-cdk/aws-ec2.ISecurityGroup[]

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="hiii-aws-cdk-utils.RdsServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

---

### Route53Options <a name="Route53Options" id="hiii-aws-cdk-utils.Route53Options"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.Route53Options.Initializer"></a>

```typescript
import { Route53Options } from 'hiii-aws-cdk-utils'

const route53Options: Route53Options = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.Route53Options.property.enableLoadBalancerAlias">enableLoadBalancerAlias</a></code> | <code>boolean</code> | Whether to configure the ALIAS for the LB. |
| <code><a href="#hiii-aws-cdk-utils.Route53Options.property.externalElbRecordName">externalElbRecordName</a></code> | <code>string</code> | the external ELB record name. |
| <code><a href="#hiii-aws-cdk-utils.Route53Options.property.internalElbRecordName">internalElbRecordName</a></code> | <code>string</code> | the internal ELB record name. |
| <code><a href="#hiii-aws-cdk-utils.Route53Options.property.zoneName">zoneName</a></code> | <code>string</code> | private zone name. |

---

##### `enableLoadBalancerAlias`<sup>Optional</sup> <a name="enableLoadBalancerAlias" id="hiii-aws-cdk-utils.Route53Options.property.enableLoadBalancerAlias"></a>

```typescript
public readonly enableLoadBalancerAlias: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to configure the ALIAS for the LB.

---

##### `externalElbRecordName`<sup>Optional</sup> <a name="externalElbRecordName" id="hiii-aws-cdk-utils.Route53Options.property.externalElbRecordName"></a>

```typescript
public readonly externalElbRecordName: string;
```

- *Type:* string
- *Default:* external

the external ELB record name.

---

##### `internalElbRecordName`<sup>Optional</sup> <a name="internalElbRecordName" id="hiii-aws-cdk-utils.Route53Options.property.internalElbRecordName"></a>

```typescript
public readonly internalElbRecordName: string;
```

- *Type:* string
- *Default:* internal

the internal ELB record name.

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="hiii-aws-cdk-utils.Route53Options.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string
- *Default:* svc.local

private zone name.

---

### S3ServiceProps <a name="S3ServiceProps" id="hiii-aws-cdk-utils.S3ServiceProps"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.S3ServiceProps.Initializer"></a>

```typescript
import { S3ServiceProps } from 'hiii-aws-cdk-utils'

const s3ServiceProps: S3ServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.S3ServiceProps.property.accessLogBucket">accessLogBucket</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.S3ServiceProps.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#hiii-aws-cdk-utils.S3ServiceProps.property.accessControl">accessControl</a></code> | <code>@aws-cdk/aws-s3.BucketAccessControl</code> | *No description.* |

---

##### `accessLogBucket`<sup>Required</sup> <a name="accessLogBucket" id="hiii-aws-cdk-utils.S3ServiceProps.property.accessLogBucket"></a>

```typescript
public readonly accessLogBucket: boolean;
```

- *Type:* boolean

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="hiii-aws-cdk-utils.S3ServiceProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="hiii-aws-cdk-utils.S3ServiceProps.property.accessControl"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* @aws-cdk/aws-s3.BucketAccessControl

---

### ServiceScalingPolicy <a name="ServiceScalingPolicy" id="hiii-aws-cdk-utils.ServiceScalingPolicy"></a>

#### Initializer <a name="Initializer" id="hiii-aws-cdk-utils.ServiceScalingPolicy.Initializer"></a>

```typescript
import { ServiceScalingPolicy } from 'hiii-aws-cdk-utils'

const serviceScalingPolicy: ServiceScalingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hiii-aws-cdk-utils.ServiceScalingPolicy.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | max capacity for the service autoscaling. |
| <code><a href="#hiii-aws-cdk-utils.ServiceScalingPolicy.property.requestPerTarget">requestPerTarget</a></code> | <code>number</code> | request per target. |
| <code><a href="#hiii-aws-cdk-utils.ServiceScalingPolicy.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | target cpu utilization. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="hiii-aws-cdk-utils.ServiceScalingPolicy.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number
- *Default:* 10

max capacity for the service autoscaling.

---

##### `requestPerTarget`<sup>Optional</sup> <a name="requestPerTarget" id="hiii-aws-cdk-utils.ServiceScalingPolicy.property.requestPerTarget"></a>

```typescript
public readonly requestPerTarget: number;
```

- *Type:* number
- *Default:* 1000

request per target.

---

##### `targetCpuUtilization`<sup>Optional</sup> <a name="targetCpuUtilization" id="hiii-aws-cdk-utils.ServiceScalingPolicy.property.targetCpuUtilization"></a>

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number
- *Default:* 50

target cpu utilization.

---



