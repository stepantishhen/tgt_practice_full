import graphene


class CreateToolModuleInput(graphene.InputObjectType):
    r_module_type_id = graphene.UUID(required=True)
    sn = graphene.String(rpassequired=True)
    dbsn = graphene.String(required=True)
    dbtname = graphene.String(required=True)
    dbdate = graphene.Date()
    dbversion = graphene.String()
    dbcomment = graphene.String()
    dbtlength = graphene.Float()
    dbtweight = graphene.Float()
    dbtmax_od = graphene.Float()
    dbtmax_od_collapsed = graphene.Float()
    dbtmax_od_opened = graphene.Float()
    dbtimage_h_shift = graphene.Float()
    dbtimage_h_scale = graphene.Float()
    dbtimage_h_y1 = graphene.Float()
    dbtimage_h_y2 = graphene.Float()
    dbtcomp_str = graphene.Float()
    image = graphene.String()


# изменение любого поля toolmodule
class UpdateToolModuleInput(graphene.InputObjectType):
    id = graphene.UUID(required=True)
    r_module_type_id = graphene.UUID()
    sn = graphene.String()
    dbsn = graphene.String()
    dbtname = graphene.String()
    dbdate = graphene.Date()
    dbversion = graphene.String()
    dbcomment = graphene.String()
    dbtlength = graphene.Float()
    dbtweight = graphene.Float()
    dbtmax_od = graphene.Float()
    dbtmax_od_collapsed = graphene.Float()
    dbtmax_od_opened = graphene.Float()
    dbtimage_h_shift = graphene.Float()
    dbtimage_h_scale = graphene.Float()
    dbtimage_h_y1 = graphene.Float()
    dbtimage_h_y2 = graphene.Float()
    dbtcomp_str = graphene.Float()
    image = graphene.String()


# удаление объекта ToolModule по id
class DeleteToolModuleInput(graphene.InputObjectType):
    id = graphene.UUID(required=True)
