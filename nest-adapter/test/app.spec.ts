import { Test } from "@nestjs/testing"
import { PactProviderModule, PactVerifierService } from "nestjs-pact"
import { INestApplication, Logger, LoggerService } from "@nestjs/common"
import { AppModule } from "../src/app.module"
import { StarWarsService } from "../src/starwars/starwars.service"

jest.setTimeout(30000)

describe("Pact Verification", () => {
  let verifier: PactVerifierService
  let logger: LoggerService
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, PactProviderModule.register({
        provider: "nest adapter",
        pactBrokerUrl: "http://localhost:9292/",
        logLevel:"debug"
      })],
      providers: [Logger],
    }).compile()

    verifier = moduleRef.get(PactVerifierService)
    logger = moduleRef.get(Logger)

    app = moduleRef.createNestApplication()

    await app.init()
  })

  it("Validates the expectations of 'GraphQL client'", async () => {
    try {
        const output = await verifier.verify(app)

        logger.log("Pact Verification Complete!")
        logger.log('------------------>', output)
    } catch (error) {
        logger.log(error)
    }
    
  })

  afterAll(async () => {
    await app.close()
  })
})