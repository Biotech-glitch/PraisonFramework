// Re-export types and classes from agent.ts to maintain backward compatibility
export { Task, Agent, PraisonAIAgents } from './agent';
export type { 
    TaskConfig, 
    AgentConfig, 
    PraisonAIAgentsConfig,
    AgentConfig as TaskAgentConfig,
    PraisonAIAgentsConfig as TaskPraisonAIAgentsConfig
} from './agent';
